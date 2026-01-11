import React, { useState } from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { projects, experience } from '../data/mock';

const Works = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="space-y-12">
      {/* Sub-tabs for Projects and Experience */}
      <div className="flex gap-6 border-b border-gray-200 pb-2">
        <button
          onClick={() => setActiveTab('projects')}
          className={`text-lg font-light pb-3 transition-all duration-300 ${
            activeTab === 'projects'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`text-lg font-light pb-3 transition-all duration-300 ${
            activeTab === 'experience'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          Experience
        </button>
      </div>

      {/* Projects Content */}
      {activeTab === 'projects' && (
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
            >
              {/* Project Number */}
              <div className="text-7xl font-light text-gray-300 mb-6 group-hover:text-black transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Project Image */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6 cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                  <span className="text-gray-500 text-sm">[Project Screenshot]</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-light mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-xs border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Achievements */}
              {project.achievements.length > 0 && (
                <div className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-600 hover:text-black hover:translate-x-2 transition-all duration-300">
                      <span className="mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Experience Content */}
      {activeTab === 'experience' && (
        <div className="space-y-16">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="group transform transition-all duration-500 hover:translate-x-2"
            >
              <div className="border-l-2 border-gray-300 hover:border-black transition-colors duration-300 pl-8">
                {/* Company and Role */}
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-light mb-2 group-hover:text-gray-700 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden md:block">•</span>
                    <span>{exp.location}</span>
                    <span className="hidden md:block">•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-600 hover:text-black hover:translate-x-2 transition-all duration-300">
                      <span className="mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 py-1 text-xs border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
