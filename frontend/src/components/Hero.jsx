import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import GradientOrb from './GradientOrb';

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <GradientOrb top="-20%" left="-10%" size="large" delay={0} />
      <GradientOrb top="40%" left="70%" size="medium" delay={2} />
      <GradientOrb top="-10%" left="60%" size="small" delay={4} />

      {/* Spotlight effect following mouse */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Greeting with animation */}
        <div className="mb-6 opacity-70 text-sm tracking-widest uppercase animate-fadeInDown flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 animate-pulse" />
          Hello, I'm
          <Sparkles className="h-4 w-4 animate-pulse" />
        </div>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
            {personalInfo.name}
          </span>
        </h1>

        {/* Title with glow effect */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-6 relative inline-block">
            <span className="relative z-10">{personalInfo.title}</span>
            <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
          </h2>
          <div className="h-16 flex items-center justify-center">
            <span
              className={`text-lg md:text-xl font-normal transition-all duration-500 relative ${
                isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Specializing in {personalInfo.skills[currentSkillIndex]}
              </span>
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons with enhanced effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links with enhanced hover */}
        <div className="flex justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/50 transform group"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/50 transform group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/50 transform group"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-purple-500 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
