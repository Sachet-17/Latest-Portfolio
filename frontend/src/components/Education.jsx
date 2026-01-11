import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Education
          </h2>
          <div className="w-20 h-px bg-black dark:bg-white" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative pl-8 md:pl-12 border-l-2 border-gray-200 dark:border-gray-800 pb-12 last:pb-0 group hover:border-black dark:hover:border-white transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="p-2 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-full group-hover:border-black dark:group-hover:border-white transition-colors">
                  <GraduationCap className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-3">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Coursework */}
                {edu.coursework.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
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

export default Education;
