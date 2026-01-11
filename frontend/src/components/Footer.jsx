import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-gray-800 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2d388a]/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name/Logo */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl font-light tracking-tight hover:opacity-70 transition-all duration-300 bg-gradient-to-r from-[#00aeef] to-[#2d388a] bg-clip-text text-transparent hover:scale-105 transform inline-block"
            >
              {personalInfo.name}
            </button>
            <p className="text-sm text-gray-500 mt-1">
              {personalInfo.title}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-800 rounded-lg hover:border-[#00aeef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00aeef]/50 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:text-[#00aeef] transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-800 rounded-lg hover:border-[#00aeef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00aeef]/50 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:text-[#00aeef] transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 border border-gray-800 rounded-lg hover:border-[#00aeef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00aeef]/50 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-[#00aeef] transition-colors" />
            </a>
          </div>

          {/* Right: Copyright & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 border border-gray-800 rounded-lg hover:border-[#00aeef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00aeef]/50 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:text-[#00aeef] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
