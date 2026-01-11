import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.cloud,
    ...skills.tools
  ];

  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="about" className="min-h-screen bg-[#F5F1E8] px-6 lg:px-12 py-24" ref={sectionRef} data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-24 transform transition-all duration-800 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] mb-8">
            About Me
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <div 
            className={`transform transition-all duration-800 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="aspect-[3/4] bg-[#E8E4DA] rounded-2xl overflow-hidden cursor-pointer hover-lift">
              <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                <span className="text-gray-500 text-lg">[Your Photo]</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div 
            className={`space-y-6 transform transition-all duration-800 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <div>
              <p className="text-sm text-gray-600 mb-4">(Who I Am)</p>
              <p className="text-2xl font-light leading-relaxed text-gray-800 mb-6">
                I'm a software engineer driven by a passion for turning complex problems into clean, efficient solutions.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a passionate AI/ML Engineer and Software Developer with expertise in building full-stack applications and intelligent systems using modern technologies. My journey in tech began with a curiosity for solving real-world problems through innovative AI solutions.
              </p>
              <p>
                Currently pursuing my Master's in Computer Engineering at New York University, I focus on Machine Learning, AI, and backend systems. My experience spans from developing RAG pipelines and deploying deep learning models to optimizing cloud architectures.
              </p>
              <p>
                Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative, data-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div 
          className={`mb-24 transform transition-all duration-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-4xl md:text-5xl font-light mb-12">
            DEVELOPER DESIGNER CREATOR /
          </h3>
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="mx-8">
                  <span className="text-5xl md:text-7xl font-bold text-transparent hover:text-[#0F0F0F] transition-colors duration-400 cursor-default" style={{
                    WebkitTextStroke: '1px rgba(0,0,0,0.15)',
                  }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef}
          className={`transform transition-all duration-800 ease-out ${
            skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-light mb-12">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Languages & Tools */}
            <div 
              className={`transition-all duration-600 ease-out ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h4 className="text-lg font-light mb-6 pb-3 border-b border-[#D2CEC4]">Languages & Tools</h4>
              <div className="space-y-3">
                {skills.languages.map((skill, idx) => (
                  <div 
                    key={skill} 
                    className="flex items-center gap-3 text-gray-700 hover:text-[#0F0F0F] hover:translate-x-3 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5C0B5]"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
                {skills.tools.slice(0, 4).map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-[#0F0F0F] hover:translate-x-3 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5C0B5]"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div 
              className={`transition-all duration-600 ease-out ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h4 className="text-lg font-light mb-6 pb-3 border-b border-[#D2CEC4]">Frameworks & Libraries</h4>
              <div className="space-y-3">
                {skills.frameworks.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-[#0F0F0F] hover:translate-x-3 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5C0B5]"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div 
              className={`transition-all duration-600 ease-out ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h4 className="text-lg font-light mb-6 pb-3 border-b border-[#D2CEC4]">Cloud & DevOps</h4>
              <div className="space-y-3">
                {skills.cloud.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-[#0F0F0F] hover:translate-x-3 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5C0B5]"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
