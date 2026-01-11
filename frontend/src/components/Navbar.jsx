import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

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
              className="text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity duration-300"
              onClick={() => scrollToSection('#hero')}
            >
              SACHET RANJAN BISI
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:opacity-60 transition-opacity duration-300 hover:rotate-90 transition-transform"
              aria-label="Open menu"
              data-testid="menu-button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F1E8] animate-menu-slide-in" data-testid="menu-overlay">
          <div className="h-full flex flex-col">
            {/* Menu Header */}
            <div className="p-6 lg:p-12 flex items-center justify-between border-b border-[#D2CEC4]">
              <div className="text-sm text-gray-600">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:opacity-60 hover:rotate-90 transition-all duration-400"
                aria-label="Close menu"
                data-testid="menu-close-button"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex items-center justify-center">
              <nav className="space-y-6">
                {['Home', 'Education', 'Works', 'About', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`)}
                    className="block text-6xl md:text-8xl font-light hover:text-gray-500 hover:translate-x-6 transition-all duration-400"
                    style={{ 
                      animation: `menuItemSlide 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s forwards`, 
                      opacity: 0 
                    }}
                    data-testid={`menu-item-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="p-6 lg:p-12 border-t border-[#D2CEC4]">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-sm text-gray-600 mb-4">Socials</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://linkedin.com/in/sachetbisi" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-sm hover:text-gray-600 hover:translate-x-2 transition-all duration-300"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/sacherbisi" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-sm hover:text-gray-600 hover:translate-x-2 transition-all duration-300"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
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
