import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App min-h-screen bg-white text-black">
      <Hero />
      <MainContent />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
