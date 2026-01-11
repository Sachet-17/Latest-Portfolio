import React, { useState, useEffect, useRef } from 'react';
import { Building2, MapPin, Calendar, ChevronDown, ChevronUp, Award, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { experience } from '../data/mock';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Extract numbers from achievement strings for impact highlights
  const highlightImpact = (text) => {
    const parts = text.split(/(%|\d+)/);
    return parts.map((part, index) => {
      if (/^\d+$/.test(part) || part === '%') {
        return (
          <span key={index} className="text-[#00aeef] font-bold text-lg">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2d388a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-[#00aeef]" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2d388a] to-[#00aeef] rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2d388a] to-[#00aeef] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <div className="relative border border-gray-800 rounded-lg p-6 md:p-8 hover:border-[#00aeef]/50 transition-all duration-300 bg-gray-900/80 backdrop-blur-sm hover:transform hover:scale-[1.01]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-light mb-2 group-hover:text-[#00aeef] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#00aeef]" />
                          <span className="font-medium text-gray-300">{exp.company}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#00aeef]" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#00aeef]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(exp.id)}
                      className="self-start hover:bg-[#00aeef]/20 transition-all duration-300 hover:scale-105"
                    >
                      {isExpanded ? (
                        <>
                          Less <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          More <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expandable Achievements with Impact Highlights */}
                  {isExpanded && (
                    <div className="mb-6 space-y-3 animate-fadeInUp">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-[#00aeef]" />
                        <h4 className="text-sm font-medium text-gray-400">
                          Key Achievements & Impact:
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-300 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-[#00aeef]/50 transition-all duration-300 hover:transform hover:translate-x-2"
                          >
                            <span className="text-[#00aeef] mt-1.5 text-xl">▸</span>
                            <span className="flex-1">{highlightImpact(achievement)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-gray-800/50 border-gray-700 hover:bg-[#00aeef]/20 hover:border-[#00aeef] transition-all duration-300 hover:scale-110"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
