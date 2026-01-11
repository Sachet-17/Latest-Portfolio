import React, { useState, useEffect, useRef } from 'react';
import { projects, experience } from '../data/mock';

const WorksSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeIndex, setActiveIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
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
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
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
      className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-16 py-32" 
      data-testid="works-section"
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
          className={`mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase">
            Selected Works
          </h2>
        </div>

        {/* Floating Tabs - Always visible pill */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-[#1A1A1A]/90 backdrop-blur-md rounded-full p-1.5 border border-gray-800/50 shadow-2xl flex gap-1">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'projects' 
                  ? 'bg-[#C5B99A] text-[#0F0F0F]' 
                  : 'text-gray-400 hover:text-[#F5F1E8]'
              }`}
              data-testid="projects-tab"
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'experience' 
                  ? 'bg-[#C5B99A] text-[#0F0F0F]' 
                  : 'text-gray-400 hover:text-[#F5F1E8]'
              }`}
              data-testid="experience-tab"
            >
              Experience
            </button>
          </div>
        </div>

        {/* Works Items - Content LEFT, Number RIGHT */}
        <div className="relative">
          {currentWorks.map((work, index) => (
            <div 
              key={`${activeTab}-${work.id}`}
              ref={el => itemRefs.current[index] = el}
              className="min-h-[85vh] py-20 border-t border-gray-800"
              data-testid={`${activeTab}-item-${index}`}
            >
              <div className="grid grid-cols-12 gap-8 md:gap-16 h-full">
                {/* LEFT - Content */}
                <div className="col-span-9 md:col-span-10 space-y-10 order-1">
                  {/* Label */}
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
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
                    <div className="space-y-8 mt-16">
                      <h4 className="text-sm text-gray-500 uppercase tracking-widest">Impact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                              className="bg-[#151515] rounded-xl p-8 border border-gray-800/50 hover:border-[#C5B99A]/50 transition-all duration-500 group"
                            >
                              {highlight && (
                                <div className="text-5xl md:text-6xl number-aesthetic text-[#C5B99A] mb-4 group-hover:scale-105 transition-transform duration-500">
                                  {highlight}
                                </div>
                              )}
                              <p className="text-gray-400 text-base leading-relaxed">
                                {text.replace(/^(Improved|Reduced|Achieved|Cut|Enhanced|Secured)/i, '').trim()}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="pt-10">
                    <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-4">
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-5 py-2.5 text-sm border border-gray-700/50 rounded-full text-gray-400 hover:bg-[#C5B99A] hover:text-[#0F0F0F] hover:border-[#C5B99A] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT - Sticky Number */}
                <div className="col-span-3 md:col-span-2 order-2">
                  <div className="sticky top-32 text-right">
                    <div className={`text-[18vw] md:text-[14vw] lg:text-[12vw] number-aesthetic leading-none transition-all duration-700 ${
                      activeIndex === index ? 'text-[#C5B99A]' : 'text-[#1A1A1A]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
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
