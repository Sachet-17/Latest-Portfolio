import React, { useEffect, useRef, useState } from 'react';
import { education } from '../data/mock';

const EducationSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(education.length - 1);
  const [visibleItems, setVisibleItems] = useState([]);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

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

    // Items observer - stacks as you scroll
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleItems(prev => {
                if (!prev.includes(index)) return [...prev, index];
                return prev;
              });
              // Expand item when it enters viewport
              setExpandedIndex(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
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
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24" 
      data-testid="education-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Same font size as Hero name */}
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-800 ease-out ${
            headerVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase mb-8">
            Where I studied
          </h2>
        </div>

        {/* Education Items - Stacking on scroll */}
        <div className="space-y-0">
          {education.map((edu, index) => {
            const isExpanded = expandedIndex === index;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                key={edu.id} 
                ref={el => itemRefs.current[index] = el}
                className={`border-t border-gray-800 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                data-testid={`education-item-${index}`}
              >
                {/* Header Row - Always visible */}
                <div className={`py-6 md:py-8 grid grid-cols-12 gap-4 items-start`}>
                  {/* Number */}
                  <div className="col-span-3 md:col-span-2">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#C5B99A]">
                      ({String(index + 1).padStart(2, '0')})
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-9 md:col-span-10">
                    {/* Title - Institution Short Name */}
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 transition-colors duration-300 ${
                      isExpanded ? 'text-[#F5F1E8]' : 'text-[#888888]'
                    }`}>
                      {edu.institution}
                    </h3>

                    {/* Expanded Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isExpanded ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {/* Degree, Location, Dates */}
                      <div className="text-gray-400 mb-6 space-y-1">
                        <p className="text-xl md:text-2xl text-[#F5F1E8] font-light">{edu.degree}</p>
                        <p className="text-base">{edu.location} • {edu.period}</p>
                      </div>

                      {/* Coursework as numbered list */}
                      {edu.coursework.length > 0 && (
                        <div className="space-y-4 mt-8">
                          {edu.coursework.map((course, idx) => (
                            <div 
                              key={course}
                              className="flex items-center gap-6 border-b border-gray-800 pb-4 hover:translate-x-3 transition-all duration-300"
                            >
                              <span className="text-sm text-[#C5B99A] min-w-[30px]">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-lg md:text-xl text-[#F5F1E8] font-light">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
