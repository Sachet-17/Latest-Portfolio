import React, { useState, useEffect, useRef } from 'react';
import { projects, experience } from '../data/mock';

const WorksSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeIndex, setActiveIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const currentWorks = activeTab === 'projects' ? projects : experience;

  useEffect(() => {
    // Reset when tab changes
    setActiveIndex(0);
    itemRefs.current = [];
  }, [activeTab]);

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

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }

    // Scroll handler for active item
    const handleScroll = () => {
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      headerObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  return (
    <section 
      id="works" 
      ref={sectionRef}
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24" 
      data-testid="works-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12">
            Selected Works
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-800 pb-4">
            <button
              onClick={() => setActiveTab('projects')}
              className={`text-lg md:text-xl font-light pb-2 transition-all duration-400 relative ${
                activeTab === 'projects' ? 'text-[#F5F1E8]' : 'text-gray-600 hover:text-gray-400'
              }`}
              data-testid="projects-tab"
            >
              (PROJECTS)
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5B99A] transition-transform duration-400 origin-left ${
                activeTab === 'projects' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`text-lg md:text-xl font-light pb-2 transition-all duration-400 relative ${
                activeTab === 'experience' ? 'text-[#F5F1E8]' : 'text-gray-600 hover:text-gray-400'
              }`}
              data-testid="experience-tab"
            >
              (EXPERIENCE)
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5B99A] transition-transform duration-400 origin-left ${
                activeTab === 'experience' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </button>
          </div>
        </div>

        {/* Works Items */}
        <div className="relative">
          {currentWorks.map((work, index) => (
            <div 
              key={`${activeTab}-${work.id}`}
              ref={el => itemRefs.current[index] = el}
              className="min-h-[80vh] py-16 border-t border-gray-800"
              data-testid={`${activeTab}-item-${index}`}
            >
              <div className="grid grid-cols-12 gap-8 h-full">
                {/* Left - Sticky Number */}
                <div className="col-span-3 md:col-span-2">
                  <div className="sticky top-32">
                    <div className={`text-[15vw] md:text-[12vw] lg:text-[10vw] font-light leading-none transition-all duration-700 ${
                      activeIndex === index ? 'text-[#C5B99A]' : 'text-[#333333]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="col-span-9 md:col-span-10 space-y-8">
                  {/* Label */}
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {activeTab === 'projects' ? '(Project)' : '(Experience)'}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F1E8] leading-tight">
                    {work.title || work.role}
                  </h3>

                  {/* Subtitle/Company */}
                  <div className="text-lg text-gray-400">
                    {activeTab === 'projects' 
                      ? work.date 
                      : `${work.company} • ${work.period}`
                    }
                  </div>

                  {/* Description */}
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl font-light">
                    {work.longDescription || work.description}
                  </p>

                  {/* Impact Metrics - Highlighted */}
                  {work.achievements && work.achievements.length > 0 && (
                    <div className="space-y-6 mt-12">
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Impact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {work.achievements.map((achievement, idx) => {
                          // Extract percentage or number from achievement
                          const match = achievement.match(/(\d+%?)/);
                          const highlight = match ? match[1] : null;
                          const text = highlight 
                            ? achievement.replace(highlight, '').trim()
                            : achievement;

                          return (
                            <div 
                              key={idx}
                              className="bg-[#1A1A1A] rounded-lg p-6 border border-gray-800 hover:border-[#C5B99A] transition-all duration-300 group"
                            >
                              {highlight && (
                                <div className="text-4xl md:text-5xl font-bold text-[#C5B99A] mb-3 group-hover:scale-105 transition-transform duration-300">
                                  {highlight}
                                </div>
                              )}
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {text.replace(/^(Improved|Reduced|Achieved|Cut|Enhanced|Secured)/i, '').trim()}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="pt-8">
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-400 hover:bg-[#C5B99A] hover:text-[#0F0F0F] hover:border-[#C5B99A] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
