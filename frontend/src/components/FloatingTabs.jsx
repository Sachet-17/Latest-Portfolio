import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const FloatingTabs = ({ activeTab, onTabChange, isVisible }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <div className="bg-[#1A1A1A]/95 backdrop-blur-xl rounded-full px-2 py-2 border border-gray-700/50 shadow-2xl flex gap-1">
        <button
          onClick={() => onTabChange('projects')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'projects' 
              ? 'bg-[#C5B99A] text-[#0F0F0F] shadow-lg' 
              : 'text-gray-400 hover:text-[#F5F1E8] hover:bg-white/5'
          }`}
          data-testid="projects-tab-floating"
        >
          Projects
        </button>
        <button
          onClick={() => onTabChange('experience')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'experience' 
              ? 'bg-[#C5B99A] text-[#0F0F0F] shadow-lg' 
              : 'text-gray-400 hover:text-[#F5F1E8] hover:bg-white/5'
          }`}
          data-testid="experience-tab-floating"
        >
          Experience
        </button>
      </div>
    </div>,
    document.body
  );
};

export default FloatingTabs;
