import React, { useRef, useEffect } from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const marqueeRef = useRef(null);

  // Create array of all skills for marquee
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.cloud,
    ...skills.tools
  ];

  // Duplicate for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="bg-black dark:bg-white py-24 overflow-hidden">
      <div className="mb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[8vw] md:text-[6vw] font-light text-white dark:text-black">
            DEVELOPER DESIGNER CREATOR /
          </h2>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap" ref={marqueeRef}>
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="mx-8">
              <span className="text-6xl md:text-8xl font-bold text-transparent" style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.2)'
              }}>
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section Title */}
      <div className="mt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-light text-white dark:text-black mb-12">
            Skills
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Languages & Tools */}
            <div>
              <h4 className="text-xl font-light text-white dark:text-black mb-6 border-b border-gray-800 dark:border-gray-300 pb-3">
                Languages & Tools
              </h4>
              <div className="space-y-4">
                {skills.languages.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00aeef]"></div>
                    <span className="text-gray-400 dark:text-gray-600">{skill}</span>
                  </div>
                ))}
                {skills.tools.slice(0, 4).map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00aeef]"></div>
                    <span className="text-gray-400 dark:text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h4 className="text-xl font-light text-white dark:text-black mb-6 border-b border-gray-800 dark:border-gray-300 pb-3">
                Frameworks & Libraries
              </h4>
              <div className="space-y-4">
                {skills.frameworks.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00aeef]"></div>
                    <span className="text-gray-400 dark:text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h4 className="text-xl font-light text-white dark:text-black mb-6 border-b border-gray-800 dark:border-gray-300 pb-3">
                Cloud & DevOps
              </h4>
              <div className="space-y-4">
                {skills.cloud.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00aeef]"></div>
                    <span className="text-gray-400 dark:text-gray-600">{skill}</span>
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

export default Skills;
