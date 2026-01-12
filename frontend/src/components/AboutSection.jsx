import React, { useEffect, useRef, useState } from 'react';
import { skills, personalInfo } from '../data/mock';
import { images } from '../config/assets';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
      aboutObserver.disconnect();
    };
  }, []);

  // Skills for marquee
  const marqueeSkills = [...skills.languages, ...skills.frameworks, ...skills.concepts];
  const duplicatedSkills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-[#F5F1E8] dark:bg-[#0A0A0A] px-4 lg:px-10 py-20 transition-colors duration-500" 
      data-testid="about-section"
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
        .number-aesthetic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Top Section - Heading LEFT, Skills Grid RIGHT */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left - Large Heading */}
          <div>
            <h2 className="text-[6.5vw] md:text-[4vw] lg:text-[3vw] font-bold leading-[1.1] tracking-tight uppercase text-[#0F0F0F] dark:text-[#F5F1E8]">
              Developer<br />
              Designer<br />
              Creator /
            </h2>
          </div>

          {/* Right - Skills Grid */}
          <div>
            <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-5">(Skills)</h3>
            <div className="grid grid-cols-3 gap-5">
            {/* Languages & Tools */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-[#D2CEC4]">
                Languages & Tools
              </h4>
              <div className="space-y-2">
                {skills.languages.slice(0, 8).map((skill) => (
                  <div 
                    key={skill} 
                    className="text-sm text-[#0F0F0F] hover:text-[#C5B99A] hover:translate-x-2 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-[#D2CEC4]">
                Frameworks & Libraries
              </h4>
              <div className="space-y-2">
                {skills.frameworks.slice(0, 8).map((skill) => (
                  <div 
                    key={skill} 
                    className="text-sm text-[#0F0F0F] hover:text-[#C5B99A] hover:translate-x-2 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Core CS Concepts */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-[#D2CEC4]">
                Core CS Concepts
              </h4>
              <div className="space-y-2">
                {skills.concepts.map((skill) => (
                  <div 
                    key={skill} 
                    className="text-sm text-[#0F0F0F] hover:text-[#C5B99A] hover:translate-x-2 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Skills Marquee - Moving train */}
        <div className={`mb-20 overflow-hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex animate-marquee-slow whitespace-nowrap py-5">
            {duplicatedSkills.map((skill, index) => (
              <span 
                key={index} 
                className="mx-5 text-3xl md:text-4xl lg:text-4xl font-bold text-transparent cursor-default hover:text-[#0F0F0F] transition-colors duration-300"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,0.15)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section - Image LEFT, About Text RIGHT */}
        <div 
          ref={aboutRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-1000 ease-out ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left - Image */}
          <div className={`transition-all duration-1000 delay-200 ${
            aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="aspect-[3/4] bg-[#E8E4DA] dark:bg-[#1A1A1A] rounded-2xl overflow-hidden group">
              {!imageError ? (
                <img 
                  src={images.profileAbout || images.profile}
                  alt="Sachet Ranjan Bisi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] dark:from-[#1A1A1A] dark:via-[#252525] dark:to-[#1A1A1A] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg font-light">[Your Photo]</span>
                </div>
              )}
            </div>
          </div>

          {/* Right - About Text */}
          <div className={`space-y-5 transition-all duration-1000 delay-400 ${
            aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              (About Me)
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0F0F0F] dark:text-[#F5F1E8] leading-tight">
              I'm a software engineer driven by a passion for turning complex problems into clean, efficient solutions.
            </h3>

            <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              <p>
                I'm Sachet Ranjan Bisi, a Computer Engineering graduate from NYU with hands-on experience in software development and AI/ML deployment. I've built scalable APIs, optimized backend systems, and deployed intelligent applications across AWS, GCP, and Azure.
              </p>
              <p>
                My work spans from boosting system throughput to building an LLM-powered system that improved accuracy and halved reconciliation time. I'm passionate about designing reliable, impactful systems that blend innovation with real-world impact.
              </p>
              <p>
                Outside of work, I'm a tech enthusiast and content consumer who loves following the NBA, diving into anime and immersive TV shows, and solving problems over a good cup of coffee.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="pt-5 border-t border-[#D2CEC4] dark:border-gray-700 flex gap-7">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Location</div>
                <div className="text-[#0F0F0F] dark:text-[#F5F1E8] font-medium">{personalInfo.location}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Status</div>
                <div className="text-[#0F0F0F] dark:text-[#F5F1E8] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
