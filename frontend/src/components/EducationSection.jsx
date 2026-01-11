import React, { useEffect, useRef, useState } from 'react';
import { education } from '../data/mock';

const EducationSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(education.length - 1); // Last one open by default
  const [visibleItems, setVisibleItems] = useState([]);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

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

    // Items observer for stacking effect
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              // Add to visible items
              setVisibleItems(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
              
              // When item comes into view from bottom, expand it
              if (entry.boundingClientRect.top > 0) {
                setExpandedIndex(index);
              }
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemsObserver.observe(ref);
    });

    return () => {
      headerObserver.disconnect();
      itemsObserver.disconnect();
    };
  }, []);

  const handleItemClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <section id="education" className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24" data-testid="education-section">
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

        {/* Education Items - Stacking accordion style */}
        <div className="space-y-0">
          {education.map((edu, index) => {
            const isExpanded = expandedIndex === index;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                key={edu.id} 
                ref={el => itemRefs.current[index] = el}
                onClick={() => handleItemClick(index)}
                className={`border-t border-gray-800 cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`education-item-${index}`}
              >
                {/* Collapsed Header - Always visible */}
                <div className={`py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-all duration-500 ${
                  isExpanded ? '' : 'hover:bg-[#1A1A1A]'
                }`}>
                  {/* Number */}
                  <div className="md:col-span-2">
                    <div className="text-5xl md:text-6xl font-light text-[#C5B99A]">
                      ({String(index + 1).padStart(2, '0')})
                    </div>
                  </div>

                  {/* Title - University/Degree Name */}
                  <div className="md:col-span-10">
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-light transition-colors duration-400 ${
                      isExpanded ? 'text-[#F5F1E8]' : 'text-[#A0A0A0] hover:text-[#F5F1E8]'
                    }`}>
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-12 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-2"></div>
                    <div className="md:col-span-10 space-y-6">
                      {/* Institution Info */}
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-400">
                        <span className="font-medium text-[#F5F1E8]">{edu.institution}</span>
                        <span className="hidden md:block text-gray-600">•</span>
                        <span>{edu.location}</span>
                        <span className="hidden md:block text-gray-600">•</span>
                        <span>{edu.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.
                      </p>

                      {/* Coursework */}
                      {edu.coursework.length > 0 && (
                        <div className="space-y-4 mt-6">
                          {edu.coursework.map((course, idx) => (
                            <div 
                              key={course}
                              className="flex items-center gap-6 border-b border-gray-800 pb-4 hover:translate-x-3 transition-all duration-400"
                            >
                              <span className="text-sm text-[#C5B99A] min-w-[30px]">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-xl text-[#F5F1E8] font-light">
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
