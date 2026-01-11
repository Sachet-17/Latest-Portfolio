import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Cpu, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';
import { personalInfo, skills } from '../data/mock';

const About = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      items: skills.languages,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      items: skills.frameworks,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: skills.cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools',
      icon: Cpu,
      items: skills.tools,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-8 w-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              About Me
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Bio with enhanced styling */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20" />
            <p className="relative text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              {personalInfo.bio}
            </p>
          </div>
        </div>

        {/* Skills Grid with staggered animations */}
        <div>
          <h3 className={`text-2xl md:text-3xl font-light mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-500" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-normal">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Badge
                          key={item}
                          variant="outline"
                          className="px-3 py-1.5 text-sm bg-gray-800/50 border-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                          style={{ animationDelay: `${itemIndex * 50}ms` }}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
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
