import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-20 z-50 w-10 h-10 rounded-full bg-[#0F0F0F] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#0F0F0F] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Toggle theme"
      data-testid="theme-toggle"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
