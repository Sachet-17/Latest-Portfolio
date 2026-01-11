import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationSection from './components/EducationSection';
import WorksSection from './components/WorksSection';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-[#F5F1E8] dark:bg-[#0A0A0A] text-[#0F0F0F] dark:text-[#F5F1E8] transition-colors duration-500">
        <ScrollProgress />
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        <Hero />
        <EducationSection />
        <WorksSection />
        <AboutSection />
        <Contact />
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
