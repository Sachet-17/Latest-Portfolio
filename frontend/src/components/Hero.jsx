import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % personalInfo.skills.length);
        setIsTyping(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 opacity-70 text-sm tracking-wide uppercase">
          Hello, I'm
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
          {personalInfo.name}
        </h1>

        {/* Title with Typing Effect */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 mb-4">
            {personalInfo.title}
          </h2>
          <div className="h-12 flex items-center justify-center">
            <span
              className={`text-lg md:text-xl font-normal transition-opacity duration-300 ${
                isTyping ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Specializing in {personalInfo.skills[currentSkillIndex]}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="group"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
