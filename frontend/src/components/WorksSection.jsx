import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, experience } from '../data/mock';

const WorksSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [visibleItems, setVisibleItems] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

  // Reset visible items when tab changes
  useEffect(() => {
    setVisibleItems([]);
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

    // Items observer
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 150);
            }
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
  }, [activeTab]);

  const currentWorks = activeTab === 'projects' ? projects : experience;

  return (
    <section id="works" className="min-h-screen bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-[8vw] md:text-[6vw] font-light mb-8">
            SELECTED WORKS /
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-500">(PROJECTS & EXPERIENCE)</div>
            <div className="text-lg text-gray-300 leading-relaxed">
              A collection of projects and professional experience showcasing technical solutions and real-world impact.
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex gap-8 border-b border-gray-800 pb-4 mb-16 transition-all duration-1000 delay-200 ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={() => setActiveTab('projects')}
            className={`text-2xl font-light pb-2 transition-all duration-500 relative ${
              activeTab === 'projects'
                ? 'text-[#F5F1E8]'
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            Projects
            {activeTab === 'projects' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5F1E8]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`text-2xl font-light pb-2 transition-all duration-500 relative ${
              activeTab === 'experience'
                ? 'text-[#F5F1E8]'
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            Experience
            {activeTab === 'experience' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5F1E8]" />
            )}
          </button>
        </div>

        {/* Works Grid */}
        <div className="space-y-32">
          {currentWorks.map((work, index) => (
            <div 
              key={work.id} 
              ref={el => itemRefs.current[index] = el}
              className={`transform transition-all duration-1000 ease-out ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Number - In Beige */}
                <div className="md:col-span-2">
                  <div className="text-8xl md:text-9xl font-light text-[#E8E4DA] hover:text-[#F5F1E8] transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10 space-y-6">
                  {/* Title and Info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light mb-2 hover:text-gray-400 transition-colors duration-500">
                        {work.title || work.role}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {activeTab === 'projects' ? work.date : `${work.company} • ${work.period}`}
                      </div>
                    </div>
                    {activeTab === 'projects' && (
                      <div className="flex gap-3">
                        {work.github && (
                          <a
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300 hover:scale-110"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {work.demo && (
                          <a
                            href={work.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300 hover:scale-110"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    {work.longDescription || work.description}
                  </p>

                  {/* Technologies/Stack */}
                  <div className="flex flex-wrap gap-3">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm border border-gray-700 rounded-full text-gray-400 hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {work.achievements && work.achievements.length > 0 && (
                    <div className="space-y-2 mt-6">
                      {work.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#F5F1E8] hover:translate-x-2 transition-all duration-300">
                          <span className="mt-1.5">•</span>
                          <span>{achievement}</span>
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

export default WorksSection;
