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

  // Handle scroll direction and stacking
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    
    // Check each item's position relative to viewport center
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const itemCenter = rect.top + rect.height / 2;
        
        // Item is near center of viewport
        if (itemCenter > viewportCenter - 200 && itemCenter < viewportCenter + 200) {
          setExpandedIndex(index);
        }
      }
    });
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

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
    };
  }, [handleScroll]);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24" 
      data-testid="education-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase">
            Where I studied
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
                className={`border-t border-gray-800 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`education-item-${index}`}
              >
                {/* Header Row */}
                <div className="py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-2">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-light transition-colors duration-500 ${
                      isExpanded ? 'text-[#C5B99A]' : 'text-[#555555]'
                    }`}>
                      ({String(index + 1).padStart(2, '0')})
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-10 md:col-span-10">
                    {/* Institution Name - Main Heading */}
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-500 ${
                      isExpanded ? 'text-[#F5F1E8]' : 'text-[#666666]'
                    }`}>
                      {edu.institution}
                    </h3>

                    {/* Expanded Content with smooth transition */}
                    <div 
                      className={`grid transition-all duration-700 ease-out ${
                        isExpanded 
                          ? 'grid-rows-[1fr] opacity-100 mt-6' 
                          : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Degree & Details */}
                        <div className="mb-8">
                          <p className="text-xl md:text-2xl text-[#F5F1E8] font-light mb-2">
                            {edu.degree}
                          </p>
                          <p className="text-base text-gray-500">
                            {edu.location} • {edu.period}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                          Building a strong foundation in computer science principles, from algorithms and data structures to systems design and AI/ML applications.
                        </p>

                        {/* Coursework in 2-column grid */}
                        {edu.coursework.length > 0 && (
                          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            {edu.coursework.map((course, idx) => (
                              <div 
                                key={course}
                                className="flex items-center gap-4 border-b border-gray-800 pb-4 hover:translate-x-2 transition-transform duration-300"
                              >
                                <span className="text-sm text-[#C5B99A] min-w-[28px]">
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
