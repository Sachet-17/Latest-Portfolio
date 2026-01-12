import React, { useEffect, useRef, useState } from 'react';
import { education } from '../data/mock';

const EducationSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0); // First item open by default
  const [visibleItems, setVisibleItems] = useState([]);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

  // Handle item click to expand/collapse
  const handleItemClick = (index) => {
    // Toggle: if clicking the same item, keep it open; otherwise expand the clicked item
    setExpandedIndex(index);
  };

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

    return () => {
      headerObserver.disconnect();
      itemsObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-4 lg:px-10 py-20" 
      data-testid="education-section"
    >
      {/* Google Font for numbers */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
        .number-aesthetic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        .education-expand {
          transition: grid-template-rows 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      opacity 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      margin-top 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .education-text-transition {
          transition: color 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .education-item-transition {
          transition: all 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mb-14 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[8vw] md:text-[6.5vw] lg:text-[5.5vw] font-bold leading-[0.9] tracking-tighter uppercase">
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
                className={`border-t border-gray-800 education-item-transition ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`education-item-${index}`}
              >
                <div className="grid grid-cols-12 gap-5 md:gap-10 items-start">
                  {/* LEFT - Content Column */}
                  <div className="col-span-9 md:col-span-10 order-1">
                    {/* Header Row - Clickable */}
                    <button
                      onClick={() => handleItemClick(index)}
                      className="w-full text-left group cursor-pointer"
                    >
                      <div className="py-6 md:py-8">
                        {/* Institution Name - Main Heading */}
                        <h3 className={`text-lg md:text-2xl lg:text-3xl font-bold education-text-transition ${
                          isExpanded ? 'text-[#F5F1E8]' : 'text-[#555555]'
                        } ${!isExpanded ? 'group-hover:text-[#777777]' : ''} transition-all duration-300`}>
                          {edu.institution}
                        </h3>
                      </div>
                    </button>

                    {/* Expanded Content with smooth transition */}
                    <div 
                      className={`grid education-expand ${
                        isExpanded 
                          ? 'grid-rows-[1fr] opacity-100 mt-5' 
                          : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Degree & Details */}
                        <div className="mb-5">
                          <p className="text-base md:text-lg text-[#F5F1E8] font-light mb-2">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-gray-500">
                            {edu.location} • {edu.period}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-5 max-w-2xl text-sm">
                          {edu.description}
                        </p>

                        {/* Coursework in 2-column grid */}
                        {edu.coursework.length > 0 && (
                          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                            {edu.coursework.map((course, idx) => (
                              <div 
                                key={course}
                                className="flex items-center gap-3 border-b border-gray-800 pb-3 hover:translate-x-2 transition-transform duration-300"
                              >
                                <span className="text-sm text-[#C5B99A] min-w-[32px] number-aesthetic">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm md:text-base text-[#F5F1E8] font-light">
                                  {course}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT - Sticky Number Column */}
                  <div className="col-span-3 md:col-span-2 order-2">
                    <div className="sticky top-20 text-right py-6 md:py-8">
                      <div className={`text-3xl md:text-4xl lg:text-5xl number-aesthetic education-text-transition ${
                        isExpanded ? 'text-[#C5B99A]' : 'text-[#333333]'
                      } transition-all duration-300`}>
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
