import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';

const Works = () => {
  return (
    <section id="works" className="min-h-screen bg-black dark:bg-white px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-[8vw] md:text-[6vw] font-light text-white dark:text-black mb-8">
            SELECTED WORKS /
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-500 dark:text-gray-600">(PROJECTS)</div>
            <div className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
              Thoughtfully crafted technical solutions that blend innovation and engineering excellence into production-ready systems.
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Project Number */}
              <div className="md:col-span-2">
                <div className="text-8xl md:text-9xl font-light text-gray-800 dark:text-gray-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Project Content */}
              <div className="md:col-span-10 space-y-6">
                {/* Project Image Placeholder */}
                <div className="w-full aspect-video bg-gray-800 dark:bg-gray-300 rounded-lg mb-8"></div>

                {/* Project Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white dark:text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-600">{project.date}</p>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-gray-700 dark:border-gray-400 rounded-full hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-gray-700 dark:border-gray-400 rounded-full hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 dark:text-gray-600 leading-relaxed max-w-3xl">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm border border-gray-700 dark:border-gray-400 rounded-full text-gray-400 dark:text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {project.achievements.length > 0 && (
                  <div className="space-y-2 mt-6">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[#00aeef]">
                        <span className="mt-1.5">•</span>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
