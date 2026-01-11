import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gray-100 dark:bg-black px-6 lg:px-12 pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold leading-none tracking-tighter uppercase">
            SACHET RANJAN BISI
          </h1>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="space-y-6">
            <div className="w-12 h-px bg-black dark:bg-white"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Open to job opportunities worldwide. Passionate about building production-ready AI/ML systems and scalable software solutions that make a difference.
            </p>
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-6 text-sm group"
            >
              CONTACT
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Placeholder for profile image - empty div for now */}
          <div className="hidden md:block">
            <div className="w-full aspect-[3/4] bg-gray-300 dark:bg-gray-800 rounded-lg"></div>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-20 right-6 lg:right-12">
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">AVAILABLE FOR WORK</div>
            <div className="text-7xl md:text-9xl font-bold">
              JUN'25
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
