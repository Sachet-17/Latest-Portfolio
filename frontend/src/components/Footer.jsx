import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black dark:bg-white px-6 lg:px-12 py-12 border-t border-gray-800 dark:border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Menu */}
          <div>
            <h3 className="text-sm text-gray-600 dark:text-gray-500 mb-4">Menu</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-sm text-white dark:text-black hover:text-[#00aeef] dark:hover:text-[#00aeef] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm text-gray-600 dark:text-gray-500 mb-4">Socials</h3>
            <div className="space-y-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white dark:text-black hover:text-[#00aeef] dark:hover:text-[#00aeef] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white dark:text-black hover:text-[#00aeef] dark:hover:text-[#00aeef] transition-colors"
              >
                <Github className="w-4 h-4" />
                Github
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-white dark:text-black hover:text-[#00aeef] dark:hover:text-[#00aeef] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          {/* Local Time */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-500 mb-2">Local time</p>
              <p className="text-sm text-white dark:text-black">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit',
                  hour12: true
                })}, EST
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="self-end p-3 border border-gray-700 dark:border-gray-400 rounded-full hover:bg-white dark:hover:bg-black hover:border-white dark:hover:border-black transition-colors group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white dark:text-black group-hover:text-black dark:group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-300 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
