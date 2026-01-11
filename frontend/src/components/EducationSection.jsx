import React, { useEffect, useRef, useState, useCallback } from 'react';
import { education } from '../data/mock';

const EducationSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const expandedIndexRef = useRef(0);

  // Update ref when state changes
  useEffect(() => {
    expandedIndexRef.current = expandedIndex;
  }, [expandedIndex]);

  // Handle scroll direction and stacking with smooth throttling
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Find the item closest to the viewport center
      let closestIndex = expandedIndexRef.current;
      let closestDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);
          
          // Item is near center of viewport (increased threshold for smoother transitions)
          if (itemCenter > viewportCenter - 300 && itemCenter < viewportCenter + 300) {
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        }
      });
      
      // Only update if the index actually changed
      if (closestIndex !== expandedIndexRef.current) {
        setExpandedIndex(closestIndex);
      }
      
      setLastScrollY(currentScrollY);
    });
  }, []);

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Items visibility observer
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems(prev => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemsObserver.observe(ref);
    });

    // Scroll listener for smooth stacking
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      headerObserver.disconnect();
      itemsObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-16 py-32" 
      data-testid="education-section"
    >
      {/* Google Font for numbers */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
        .number-aesthetic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-24 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase">
            WHERE I STUDIED/
          </h2>
        </div>

        {/* Education Items */}
        <div className="space-y-0">
          {education.map((edu, index) => {
            const isExpanded = expandedIndex === index;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                key={edu.id} 
                ref={el => itemRefs.current[index] = el}
                className={`border-t border-gray-800 transition-all duration-1000 ease-in-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`education-item-${index}`}
              >
                {/* Header Row - Content LEFT, Number RIGHT */}
                <div className="py-10 md:py-14 grid grid-cols-12 gap-8 md:gap-16 items-start">
                  {/* LEFT - Content */}
                  <div className="col-span-9 md:col-span-10 order-1">
                    {/* Institution Name - Main Heading */}
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 ease-in-out ${
                      isExpanded ? 'text-[#F5F1E8]' : 'text-[#555555]'
                    }`}>
                      {edu.institution}
                    </h3>

                    {/* Expanded Content with smooth transition */}
                    <div 
                      className={`grid transition-all duration-1000 ease-in-out ${
                        isExpanded 
                          ? 'grid-rows-[1fr] opacity-100 mt-8' 
                          : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Degree & Details */}
                        <div className="mb-10">
                          <p className="text-xl md:text-2xl text-[#F5F1E8] font-light mb-3">
                            {edu.degree}
                          </p>
                          <p className="text-base text-gray-500">
                            {edu.location} • {edu.period}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl text-lg">
                          {edu.description}
                        </p>

                        {/* Coursework in 2-column grid */}
                        {edu.coursework.length > 0 && (
                          <div className="grid grid-cols-2 gap-x-16 gap-y-5">
                            {edu.coursework.map((course, idx) => (
                              <div 
                                key={course}
                                className="flex items-center gap-6 border-b border-gray-800 pb-5 hover:translate-x-2 transition-transform duration-300"
                              >
                                <span className="text-sm text-[#C5B99A] min-w-[32px] number-aesthetic">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="text-base md:text-lg text-[#F5F1E8] font-light">
                                  {course}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT - Sticky Number */}
                  <div className="col-span-3 md:col-span-2 order-2">
                    <div className="sticky top-32 text-right">
                      <div className={`text-6xl md:text-7xl lg:text-8xl number-aesthetic transition-all duration-700 ease-in-out ${
                        isExpanded ? 'text-[#C5B99A]' : 'text-[#333333]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
