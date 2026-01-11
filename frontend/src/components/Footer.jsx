import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white px-6 lg:px-12 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
