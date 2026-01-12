import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-[#0F0F0F] text-[#F5F1E8] px-4 lg:px-8 py-[60px]" ref={sectionRef} data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`transform transition-all duration-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-5">
            Let's Connect
          </h2>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Please reach out via email, number or LinkedIn.
          </p>

          <div className="space-y-3">
            <div 
              className={`flex items-start gap-4 group hover:translate-x-3 transition-all duration-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Mail className="w-5 h-5 mt-1 text-[#C5B99A]" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-[#F5F1E8] hover:text-[#C5B99A] transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div 
              className={`flex items-start gap-4 group hover:translate-x-3 transition-all duration-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Phone className="w-5 h-5 mt-1 text-[#C5B99A]" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-[#F5F1E8] hover:text-[#C5B99A] transition-colors duration-300">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div 
              className={`flex items-start gap-4 group hover:translate-x-3 transition-all duration-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <MapPin className="w-5 h-5 mt-1 text-[#C5B99A]" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-[#F5F1E8]">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div 
            className={`mt-6 pt-6 border-t border-gray-800 transition-all duration-800 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-sm text-gray-500 mb-2">Connect with me</p>
            <div className="flex gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300 hover:scale-110"
                data-testid="linkedin-link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300 hover:scale-110"
                data-testid="github-link"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
