import React from 'react';
import { Code2, Database, Cloud, Cpu, Network } from 'lucide-react';
import { Badge } from './ui/badge';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      items: skills.languages
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      items: skills.frameworks
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: skills.cloud
    },
    {
      title: 'Tools',
      icon: Cpu,
      items: skills.tools
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-20 h-px bg-black dark:bg-white" />
        </div>

        {/* Bio */}
        <div className="mb-20">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl">
            {personalInfo.bio}
          </p>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-light mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-black dark:group-hover:border-white transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-normal">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
