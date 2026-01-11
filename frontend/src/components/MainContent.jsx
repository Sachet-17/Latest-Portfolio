import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Education from './Education';
import Works from './Works';
import About from './About';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About' }
  ];

  return (
    <>
      {/* Fixed Header with Tabs */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <div className="text-sm font-medium">SACHET RANJAN BISI</div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-light py-2 transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                  )}
                </button>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="min-h-screen bg-white px-6 lg:px-12 pt-32 pb-20">
        <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <div className="w-20 h-px bg-black"></div>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {activeTab === 'education' && <Education />}
            {activeTab === 'works' && <Works />}
            {activeTab === 'about' && <About />}
          </div>
        </div>
      </section>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-menu-slide-in">
          <div className="h-full flex flex-col">
            {/* Menu Header */}
            <div className="p-6 lg:p-12 flex items-center justify-between border-b border-gray-200">
              <div className="text-sm text-gray-600">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:opacity-60 hover:rotate-90 transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex items-center justify-center">
              <nav className="space-y-6">
                <a
                  href="#hero"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block text-6xl md:text-8xl font-light hover:text-gray-600 hover:translate-x-4 transition-all duration-500"
                  style={{ animation: 'menuItemSlide 0.6s ease-out 0s forwards', opacity: 0 }}
                >
                  Home
                </a>
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className="block text-6xl md:text-8xl font-light hover:text-gray-600 hover:translate-x-4 transition-all duration-500"
                    style={{ 
                      animation: `menuItemSlide 0.6s ease-out ${(index + 1) * 0.1}s forwards`,
                      opacity: 0
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-6xl md:text-8xl font-light hover:text-gray-600 hover:translate-x-4 transition-all duration-500"
                  style={{ animation: 'menuItemSlide 0.6s ease-out 0.4s forwards', opacity: 0 }}
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="p-6 lg:p-12 border-t border-gray-200">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-sm text-gray-600 mb-4">Socials</h3>
                  <div className="space-y-2">
                    <a href="https://linkedin.com/in/sachetbisi" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-600 hover:translate-x-2 transition-all duration-300">
                      LinkedIn
                    </a>
                    <a href="https://github.com/sacherbisi" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-gray-600 hover:translate-x-2 transition-all duration-300">
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

export default MainContent;
