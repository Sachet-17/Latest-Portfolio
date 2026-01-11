import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    // Opening curtain animation sequence
    const curtainTimer = setTimeout(() => {
      setShowCurtain(false);
    }, 1800);

    const contentTimer = setTimeout(() => {
      setAnimateContent(true);
    }, 2000);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Opening Curtain Animation */}
      {showCurtain && (
        <div className="opening-curtain" data-testid="opening-curtain">
          <div className="opening-logo">SRB</div>
        </div>
      )}

      <section id="hero" className="min-h-screen bg-[#F5F1E8] px-6 lg:px-12 pt-32 pb-20 relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Dramatic Reveal */}
          <div className="mb-16">
            <div className="overflow-hidden">
              <h1 
                className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] mb-4 transform transition-all duration-1000 ease-out ${
                  animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                SACHET
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 
                className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] transform transition-all duration-1000 ease-out ${
                  animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                RANJAN BISI
              </h1>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left Column - Description */}
            <div 
              className={`md:col-span-5 space-y-6 transform transition-all duration-1000 ease-out ${
                animateContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div 
                  className={`h-px bg-[#0F0F0F] transition-all duration-700 ease-out ${
                    animateContent ? 'w-12' : 'w-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                ></div>
                <span>AI/ML ENGINEER & SDE</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                Open to job opportunities worldwide. Passionate about building production-ready AI/ML systems and scalable software solutions that make a difference.
              </p>
              <Button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-[#0F0F0F] text-[#F5F1E8] hover:bg-[#1A1A1A] rounded-full px-8 py-6 text-sm font-normal group transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="hero-contact-btn"
              >
                CONTACT
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Right Column - Image Placeholder */}
            <div 
              className={`md:col-span-7 transform transition-all duration-1000 ease-out ${
                animateContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="relative">
                <div className="aspect-[4/3] bg-[#E8E4DA] rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                  <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-light">[Your Profile Photo]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Badge - Bottom Right */}
          <div 
            className={`absolute bottom-12 right-6 lg:right-12 text-right transform transition-all duration-1000 ease-out ${
              animateContent ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
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
    </>
  );
};

export default Hero;
