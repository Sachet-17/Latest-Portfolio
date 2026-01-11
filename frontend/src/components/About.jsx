import React from 'react';
import { Badge } from './ui/badge';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.cloud,
    ...skills.tools
  ];

  return (
    <div className="space-y-16">
      {/* Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
            <span className="text-gray-500 text-lg">[Your Photo]</span>
          </div>
        </div>

        {/* Bio Text */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-4">(About Me)</p>
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

      {/* Skills Section */}
      <div className="pt-12 border-t border-gray-200">
        <h3 className="text-3xl font-light mb-8">Technical Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Languages & Tools */}
          <div>
            <h4 className="text-lg font-light mb-4 pb-2 border-b border-gray-200">Languages & Tools</h4>
            <div className="space-y-3">
              {skills.languages.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
              {skills.tools.slice(0, 4).map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h4 className="text-lg font-light mb-4 pb-2 border-b border-gray-200">Frameworks & Libraries</h4>
            <div className="space-y-3">
              {skills.frameworks.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h4 className="text-lg font-light mb-4 pb-2 border-b border-gray-200">Cloud & DevOps</h4>
            <div className="space-y-3">
              {skills.cloud.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
