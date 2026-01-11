import React, { useEffect, useRef, useState } from 'react';
import { education } from '../data/mock';

const EducationSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const itemRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Header observer - simple fade, no stacking
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

    // Items observer - stacking effect
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              // Staggered reveal for stack effect
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 250);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemsObserver.observe(ref);
    });

    return () => {
      headerObserver.disconnect();
      itemsObserver.disconnect();
    };
  }, [visibleItems]);

  return (
    <section id="education" className="min-h-screen bg-[#F5F1E8] px-6 lg:px-12 py-24" data-testid="education-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Simple fade, NO stacking */}
        <div 
          ref={headerRef}
          className={`mb-24 transition-all duration-800 ease-out ${
            headerVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-[8vw] md:text-[6vw] font-light text-[#0F0F0F] mb-8">
            EDUCATION /
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-600">(ACADEMIC BACKGROUND)</div>
            <div className="text-lg text-gray-700 leading-relaxed">
              My academic journey in Computer Engineering, focusing on Machine Learning, AI, and scalable systems.
            </div>
          </div>
        </div>

        {/* Education Items - STACKING animation */}
        <div className="space-y-24">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              ref={el => itemRefs.current[index] = el}
              className={`stack-item border-t border-[#D2CEC4] pt-12 ${
                visibleItems.includes(index) ? 'visible' : ''
              }`}
              data-testid={`education-item-${index}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Number - Beige colored */}
                <div className="md:col-span-2">
                  <div className="text-6xl font-light text-[#C5C0B5] hover:text-[#0F0F0F] transition-colors duration-500">
                    ({String(index + 1).padStart(2, '0')})
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-4xl md:text-5xl font-light text-[#0F0F0F] mb-4 hover:text-gray-600 transition-colors duration-500">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600 mb-6">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="hidden md:block">•</span>
                    <span>{edu.location}</span>
                    <span className="hidden md:block">•</span>
                    <span>{edu.period}</span>
                  </div>

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 mb-4">Relevant Coursework:</p>
                      {edu.coursework.map((course, idx) => (
                        <div 
                          key={course}
                          className="flex items-center gap-4 border-b border-[#D2CEC4] pb-3 transform transition-all duration-400 hover:translate-x-3"
                        >
                          <span className="text-sm text-[#C5C0B5] min-w-[30px]">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-lg text-[#0F0F0F]">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
