import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { files, socialLinks } from '../config/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['AI Engineer', 'ML Engineer', 'Software Developer', 'Full Stack Enthusiast'];

  useEffect(() => {
    // Delay navbar appearance until after opening animation
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 2200);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${isScrolled ? 'bg-[#F5F1E8]/90 backdrop-blur-md' : 'bg-transparent'}`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div 
              className="text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity duration-300 flex items-center"
              onClick={() => scrollToSection('#hero')}
            >
              <span className="min-w-[200px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:opacity-60 transition-all duration-300"
              aria-label="Open menu"
              data-testid="menu-button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu - Dark Overlay Style */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]" data-testid="menu-overlay">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-[#F5F1E8] flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Close menu"
            data-testid="menu-close-button"
          >
            <X className="w-5 h-5 text-[#0A0A0A]" />
          </button>

          <div className="h-full flex flex-col justify-between px-12 lg:px-24 py-24">
            {/* Menu Items */}
            <nav className="flex-1 flex flex-col justify-center space-y-2">
              {[
                { label: 'HOME', id: '#hero' },
                { label: 'EDUCATION', id: '#education' },
                { label: 'WORKS', id: '#works' },
                { label: 'ABOUT', id: '#about' },
                { label: 'CONTACT', id: '#contact' }
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F1E8] hover:text-[#C5B99A] transition-all duration-300 hover:translate-x-4"
                  style={{ 
                    animation: `menuItemSlide 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s forwards`, 
                    opacity: 0 
                  }}
                  data-testid={`menu-item-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">EMAIL ADDRESS</p>
                <a 
                  href={`mailto:${socialLinks.email}`}
                  className="text-[#F5F1E8] hover:text-[#C5B99A] transition-colors duration-300"
                >
                  {socialLinks.email}
                </a>
              </div>
              <div className="flex gap-6">
                <a 
                  href={socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#F5F1E8] transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href={socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#F5F1E8] transition-colors duration-300"
                >
                  Github
                </a>
                <a 
                  href={files.resume}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#F5F1E8] transition-colors duration-300"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes menuItemSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
