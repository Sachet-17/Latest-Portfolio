import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="min-h-screen bg-gray-100 dark:bg-black px-6 lg:px-12 py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Placeholder */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-600 text-sm">[Your Photo]</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="space-y-4">
              <div className="text-sm text-gray-600 dark:text-gray-500">(About Me)</div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
                I'm a software engineer driven by a passion for turning complex problems into clean, efficient solutions.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-400 leading-relaxed">
              <p className="transform transition-all duration-700 delay-500 hover:translate-x-2">
                I am a passionate AI/ML Engineer and Software Developer with expertise in building full-stack applications and intelligent systems using modern technologies. My journey in tech began with a curiosity for solving real-world problems through innovative AI solutions, which evolved into a love for crafting scalable, production-ready systems.
              </p>
              <p className="transform transition-all duration-700 delay-700 hover:translate-x-2">
                Currently pursuing my Master's in Computer Engineering at New York University, I focus on Machine Learning, AI, and backend systems. My experience spans from developing RAG pipelines and deploying deep learning models to optimizing cloud architectures and building high-performance APIs.
              </p>
              <p className="transform transition-all duration-700 delay-900 hover:translate-x-2">
                Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative, data-driven solutions. I aim to contribute to impactful projects that make a difference in users' lives.
              </p>
            </div>

            {/* Education Timeline */}
            <div className={`mt-12 pt-12 border-t border-gray-300 dark:border-gray-800 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h3 className="text-2xl font-light mb-8">Education</h3>
              <div className="space-y-8">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium hover:text-[#00aeef] transition-colors duration-300">Master of Science in Computer Engineering</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-500">Expected May 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">New York University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-600 mt-2">
                    Machine Learning, Artificial Intelligence, Internet Protocols, Network Security
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium hover:text-[#00aeef] transition-colors duration-300">Bachelor of Science in Computer Engineering</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-500">May 2023</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">University of Illinois at Chicago</p>
                  <p className="text-sm text-gray-500 dark:text-gray-600 mt-2">
                    Data Structures, Computer Vision, Systems Programming, Computer Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
