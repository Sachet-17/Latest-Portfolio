import React, { useState } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { education } from '../data/mock';

const Education = () => {
  return (
    <div className="space-y-16">
      {education.map((edu, index) => (
        <div
          key={edu.id}
          className="group transform transition-all duration-500 hover:translate-x-2"
        >
          <div className="border-l-2 border-gray-300 hover:border-black transition-colors duration-300 pl-8">
            {/* Institution and Degree */}
            <div className="mb-4">
              <h3 className="text-3xl md:text-4xl font-light mb-2 group-hover:text-gray-700 transition-colors">
                {edu.degree}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>

            {/* Coursework */}
            {edu.coursework.length > 0 && (
              <div>
                <p className="text-sm text-gray-500 mb-3">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="px-3 py-1 text-xs border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
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
  );
};

export default Education;
