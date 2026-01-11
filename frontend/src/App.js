import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App min-h-screen bg-black text-white relative">
      {/* Animated particle background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <Toaster />
    </div>
  );
}

export default App;
