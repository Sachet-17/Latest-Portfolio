import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';
import { education } from '../data/mock';

const Education = () => {
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

  return (
    <section id="education" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2d388a]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-[#00aeef]" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Education
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00aeef] to-[#2d388a] rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`group relative pl-8 md:pl-12 border-l-2 border-gray-800 pb-12 last:pb-0 hover:border-[#00aeef] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Animated Timeline Dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-[#00aeef]/30 animate-ping" />
                  {/* Main dot */}
                  <div className="relative p-2 bg-black border-2 border-gray-800 rounded-full group-hover:border-[#00aeef] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00aeef]/50">
                    <GraduationCap className="h-4 w-4 text-[#00aeef]" />
                  </div>
                </div>
              </div>

              {/* Card with glow effect */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00aeef] to-[#2d388a] rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 group-hover:border-[#00aeef]/50 transition-all duration-300 hover:transform hover:scale-[1.01]">
                  <h3 className="text-2xl md:text-3xl font-light mb-3 group-hover:text-[#00aeef] transition-colors">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#00aeef]" />
                      <span className="font-medium text-gray-300">{edu.institution}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#00aeef]" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#00aeef]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-500 mb-3">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge
                            key={course}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-gray-800/50 border border-gray-700 hover:border-[#00aeef] hover:bg-[#00aeef]/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${courseIndex * 50}ms` }}
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
