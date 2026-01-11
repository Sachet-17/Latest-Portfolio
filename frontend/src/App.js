import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationSection from './components/EducationSection';
import WorksSection from './components/WorksSection';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App min-h-screen bg-[#F5F1E8] text-[#0F0F0F]">
      <Navbar />
      <Hero />
      <EducationSection />
      <WorksSection />
      <AboutSection />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
