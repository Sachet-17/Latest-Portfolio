import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI/ML Engineer & SDE
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-black">
          <div className="h-full flex flex-col">
            {/* Menu Header */}
            <div className="p-6 lg:p-12 flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block text-6xl md:text-8xl font-light hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="p-6 lg:p-12">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-4">Socials</h3>
                  <div className="space-y-2">
                    <a href="https://linkedin.com/in/sachetbisi" target="_blank" rel="noopener noreferrer" className="block text-sm hover:opacity-60 transition-opacity">
                      LinkedIn
                    </a>
                    <a href="https://github.com/sacherbisi" target="_blank" rel="noopener noreferrer" className="block text-sm hover:opacity-60 transition-opacity">
                      Github
                    </a>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Local time<br />
                  {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
