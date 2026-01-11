import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Button } from './ui/button';

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
    window.open('/files/resume.pdf', '_blank');
  };

  return (
    <>
      {/* Opening Curtain Animation */}
      {showCurtain && (
        <div className="opening-curtain" data-testid="opening-curtain">
          <div className="opening-logo">SRB</div>
        </div>
      )}

      <section id="hero" className="min-h-screen bg-[#F5F1E8] px-6 lg:px-16 pt-32 pb-24 relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          {/* Main Heading */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-12">
              <div className="overflow-hidden">
                <h1 
                  className={`text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase text-[#0F0F0F] transform transition-all duration-1000 ease-out ${
                    animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0ms' }}
                >
                  SACHET
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 
                  className={`text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase text-[#0F0F0F] transform transition-all duration-1000 ease-out ${
                    animateContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  RANJAN BISI
                </h1>
              </div>
            </div>

            {/* Bottom Section - Description & Buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              {/* Left - Description */}
              <div 
                className={`lg:col-span-5 space-y-8 transform transition-all duration-1000 ease-out ${
                  animateContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest">
                  <div 
                    className={`h-px bg-[#0F0F0F] transition-all duration-700 ease-out ${
                      animateContent ? 'w-12' : 'w-0'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  ></div>
                  <span>AI/ML Engineer & SDE</span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Open to job opportunities worldwide. Passionate about building production-ready AI/ML systems and scalable software solutions.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="bg-[#0F0F0F] text-[#F5F1E8] hover:bg-[#1A1A1A] rounded-full px-8 py-6 text-sm font-medium group transition-all duration-400 hover:scale-105"
                    data-testid="hero-contact-btn"
                  >
                    CONTACT
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    onClick={openResume}
                    variant="outline"
                    className="bg-transparent border-2 border-[#0F0F0F] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F5F1E8] rounded-full px-8 py-6 text-sm font-medium group transition-all duration-400 hover:scale-105"
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
                  <div className="aspect-[4/3] bg-[#E8E4DA] rounded-2xl overflow-hidden group cursor-pointer hover-lift">
                    <div className="w-full h-full bg-gradient-to-br from-[#E8E4DA] via-[#DDD9CF] to-[#D2CEC4] hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                      <span className="text-gray-500 text-lg font-light">[Your Profile Photo]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Badge - Bottom Right */}
          <div 
            className={`absolute bottom-8 right-6 lg:right-16 text-right transform transition-all duration-1000 ease-out ${
              animateContent ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] text-[#F5F1E8] text-xs rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                AVAILABLE FOR WORK
              </span>
            </div>
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#0F0F0F] hover:text-gray-600 transition-colors duration-500 cursor-default">
              JUN'25
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
