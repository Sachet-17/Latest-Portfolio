import React, { useState, useEffect, useRef } from 'react';
import { Folder, ExternalLink, Github, ChevronRight, Rocket, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Extract numbers for impact highlighting
  const highlightImpact = (text) => {
    const parts = text.split(/(%|\d+)/);
    return parts.map((part, index) => {
      if (/^\d+$/.test(part) || part === '%') {
        return (
          <span key={index} className="text-green-400 font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="h-8 w-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Projects
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/50'
                  : 'border-gray-700 hover:border-blue-500 hover:bg-blue-500/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-gradient-x" />
              
              <div className="relative border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm hover:transform hover:scale-[1.02] h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 border border-gray-700 rounded-lg group-hover:border-blue-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Folder className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.date}</p>
                <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/20 transition-all duration-300">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-700">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* View Details Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="group/btn self-start hover:bg-blue-500/20 transition-all duration-300"
                >
                  View Details
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-800">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-light mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-400">
                  {selectedProject.date} • {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Long Description */}
                <div>
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-blue-400" />
                    Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Achievements with Impact Highlights */}
                {selectedProject.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      Key Achievements & Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                        >
                          <span className="text-green-400 mt-1">▸</span>
                          <span className="flex-1">{highlightImpact(achievement)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1.5 bg-gray-800/50 border-gray-700 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/20">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
