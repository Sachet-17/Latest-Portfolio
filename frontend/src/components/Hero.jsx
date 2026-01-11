import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gray-100 dark:bg-black px-6 lg:px-12 pt-32 pb-20 relative overflow-hidden" ref={heroRef}>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with staggered animation */}
        <div className="mb-12 overflow-hidden">
          <h1 className={`text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-none tracking-tighter uppercase transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            SACHET<br />RANJAN<br />BISI
          </h1>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="w-12 h-px bg-black dark:bg-white"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Open to job opportunities worldwide. Passionate about building production-ready AI/ML systems and scalable software solutions that make a difference.
            </p>
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-6 text-sm group transition-all duration-300 hover:scale-105"
            >
              CONTACT
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Placeholder for profile image with hover effect */}
          <div className={`hidden md:block transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-600 text-sm">[Your Photo]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Badge with animation */}
        <div className={`absolute bottom-20 right-6 lg:right-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}>
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">AVAILABLE FOR WORK</div>
            <div className="text-7xl md:text-9xl font-bold hover:text-[#00aeef] transition-colors duration-500">
              JUN'25
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
