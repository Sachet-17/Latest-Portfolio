import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { images, files } from '../config/assets';

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

  const openResume = () => {
    // Opens resume from files folder in new tab
    window.open(files.resume, '_blank');
  };

  return (
    <>
      {/* Opening Curtain Animation */}
      {showCurtain && (
        <div className="opening-curtain" data-testid="opening-curtain">
          <div className="opening-logo">SRB</div>
        </div>
      )}

      <section id="hero" className="h-screen bg-[#F5F1E8] dark:bg-[#0A0A0A] px-6 lg:px-16 pt-20 pb-8 relative overflow-hidden transition-colors duration-500" data-testid="hero-section">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Main Heading */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6">
              <div className="overflow-hidden">
                <h1 
                  className={`text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] dark:text-[#F5F1E8] transform transition-all duration-1000 ease-out ${
                    animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0ms' }}
                >
                  SACHET
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 
                  className={`text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#0F0F0F] dark:text-[#F5F1E8] transform transition-all duration-1000 ease-out ${
                    animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  RANJAN BISI
                </h1>
              </div>
            </div>

            {/* Bottom Section - Description & Buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              {/* Left - Description */}
              <div 
                className={`lg:col-span-5 space-y-4 transform transition-all duration-1000 ease-out ${
                  animateContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  <div 
                    className={`h-px bg-[#0F0F0F] dark:bg-[#F5F1E8] transition-all duration-700 ease-out ${
                      animateContent ? 'w-12' : 'w-0'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  ></div>
                  <span>AI/ML Engineer & SDE</span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Open to job opportunities worldwide. Passionate about building polished, reliable, scalable systems and clean UIs.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <Button
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="bg-[#0F0F0F] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#0F0F0F] hover:bg-[#1A1A1A] dark:hover:bg-[#E8E4DA] rounded-full px-8 py-6 text-sm font-medium group transition-all duration-400 hover:scale-105"
                    data-testid="hero-contact-btn"
                  >
                    CONTACT
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    onClick={openResume}
                    variant="outline"
                    className="bg-transparent border-2 border-[#0F0F0F] dark:border-[#F5F1E8] text-[#0F0F0F] dark:text-[#F5F1E8] hover:bg-[#0F0F0F] dark:hover:bg-[#F5F1E8] hover:text-[#F5F1E8] dark:hover:text-[#0F0F0F] rounded-full px-8 py-6 text-sm font-medium group transition-all duration-400 hover:scale-105"
                    data-testid="hero-resume-btn"
                  >
                    RESUME
                    <FileText className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div 
                className={`lg:col-span-7 transform transition-all duration-1000 ease-out ${
                  animateContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="relative">
                  <div className="aspect-[3/2] bg-[#E8E4DA] rounded-2xl overflow-hidden group cursor-pointer hover-lift shadow-2xl">
                    <img 
                      src="/images/hero.jpg"
                      alt="Hero"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] hover:scale-105 transition-transform duration-700 ease-out items-center justify-center hidden">
                      <span className="text-gray-500 text-lg font-light">[Hero Image]</span>
                    </div>
                    {/* Subtle vignette overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    {/* Soft corner blend */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F5F1E8]/30 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Badge - Bottom Right */}
          <div 
            className={`absolute bottom-4 right-6 lg:right-16 text-right transform transition-all duration-1000 ease-out ${
              animateContent ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#0F0F0F] text-xs rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                AVAILABLE FOR WORK
              </span>
            </div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F0F0F] dark:text-[#F5F1E8] hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-500 cursor-default">
              ASAP'26
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
