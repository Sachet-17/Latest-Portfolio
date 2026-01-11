import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial delay for page load
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <div className="animate-fade-in-scale">
          <div className="text-6xl font-light text-[#0F0F0F] tracking-tight">SRB</div>
        </div>
      </div>
    );
  }

  return (
    <section id="hero" className="min-h-screen bg-[#F5F1E8] px-6 lg:px-12 pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading - Staggered Animation */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <h1 className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] mb-4 transform transition-all duration-1500 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              SACHET
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] transform transition-all duration-1500 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              RANJAN BISI
            </h1>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left Column - Description */}
          <div className={`md:col-span-5 space-y-6 transform transition-all duration-1200 ease-out delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="w-12 h-px bg-[#0F0F0F]"></div>
              <span>AI/ML ENGINEER & SDE</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md">
              Open to job opportunities worldwide. Passionate about building production-ready AI/ML systems and scalable software solutions that make a difference.
            </p>
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#0F0F0F] text-[#F5F1E8] hover:bg-[#1A1A1A] rounded-full px-8 py-6 text-sm font-normal group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              CONTACT
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className={`md:col-span-7 transform transition-all duration-1200 ease-out delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="aspect-[4/3] bg-[#E8E4DA] rounded-2xl overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-light">[Your Profile Photo]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Badge - Bottom Right */}
        <div className={`absolute bottom-12 right-6 lg:right-12 text-right transform transition-all duration-1200 ease-out delay-1100 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="mb-3">
            <span className="inline-block px-4 py-2 bg-[#0F0F0F] text-[#F5F1E8] text-xs rounded-full">
              AVAILABLE FOR WORK
            </span>
          </div>
          <div className="text-8xl md:text-9xl font-bold text-[#0F0F0F] hover:text-gray-600 transition-colors duration-500 cursor-default">
            JUN'25
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
