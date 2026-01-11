import React from 'react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 dark:bg-black px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Placeholder */}
          <div className="w-full aspect-[3/4] bg-gray-300 dark:bg-gray-800 rounded-lg"></div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-600 dark:text-gray-500">(About Me)</div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
                I'm a software engineer driven by a passion for turning complex problems into clean, efficient solutions.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-400 leading-relaxed">
              <p>
                I am a passionate AI/ML Engineer and Software Developer with expertise in building full-stack applications and intelligent systems using modern technologies. My journey in tech began with a curiosity for solving real-world problems through innovative AI solutions, which evolved into a love for crafting scalable, production-ready systems.
              </p>
              <p>
                Currently pursuing my Master's in Computer Engineering at New York University, I focus on Machine Learning, AI, and backend systems. My experience spans from developing RAG pipelines and deploying deep learning models to optimizing cloud architectures and building high-performance APIs.
              </p>
              <p>
                Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative, data-driven solutions. I aim to contribute to impactful projects that make a difference in users' lives.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="mt-12 pt-12 border-t border-gray-300 dark:border-gray-800">
              <h3 className="text-2xl font-light mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Master of Science in Computer Engineering</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-500">Expected May 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">New York University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-600 mt-2">
                    Machine Learning, Artificial Intelligence, Internet Protocols, Network Security
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Bachelor of Science in Computer Engineering</h4>
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
