import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: '01',
      title: 'AI/ML Systems',
      description: 'From RAG pipelines to deep learning models, I build production-ready AI/ML systems. I work with modern frameworks to deliver solutions that are scalable, efficient, and ready for real-world deployment.',
      stack: [
        ['Python', 'TensorFlow', 'PyTorch'],
        ['LangChain', 'RAG', 'NLP'],
        ['FastAPI', 'Django REST', 'Microservices']
      ]
    },
    {
      number: '02',
      title: 'Backend & Cloud Architecture',
      description: 'Design is more than code — it\'s about scalability and reliability. I design and develop robust backend systems with cloud infrastructure that handle real-world traffic and data processing needs.',
      stack: [
        ['FastAPI', 'Spring Boot', 'Node.js'],
        ['AWS', 'GCP', 'Docker', 'Kubernetes'],
        ['MongoDB', 'PostgreSQL', 'Redis']
      ]
    },
    {
      number: '03',
      title: 'System Optimization',
      description: 'Beyond building features, I\'m driven by making systems faster and more efficient. I apply CS fundamentals to optimize data pipelines, improve throughput, and ensure scalability at every layer.',
      stack: [
        ['Data Structures & Algorithms', 'System Design'],
        ['CI/CD', 'Jenkins', 'GitLab'],
        ['Performance Optimization', 'Testing']
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black dark:bg-white px-6 lg:px-12 py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-[8vw] md:text-[6vw] font-light text-white dark:text-black mb-8">
            WHAT I DO /
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-sm text-gray-500 dark:text-gray-600">(SERVICES)</div>
            <div className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed">
              I specialize in building AI/ML systems and scalable backend infrastructure that are production-ready and performant. With expertise in both machine learning and software engineering, I help turn complex problems into elegant solutions.
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => itemRefs.current[index] = el}
              className={`border-t border-gray-800 dark:border-gray-300 pt-12 transform transition-all duration-1000 ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Number */}
                <div className="md:col-span-2">
                  <div className="text-6xl font-light text-gray-700 dark:text-gray-400 hover:text-[#00aeef] transition-colors duration-500">
                    ({service.number})
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-4xl md:text-5xl font-light text-white dark:text-black mb-6 hover:text-[#00aeef] dark:hover:text-[#00aeef] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-600 leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>
                  
                  {/* Stack Items */}
                  <div className="space-y-3">
                    {service.stack.map((row, rowIndex) => (
                      <div 
                        key={rowIndex} 
                        className="flex items-center gap-4 border-b border-gray-800 dark:border-gray-300 pb-3 transform transition-all duration-500 hover:translate-x-2"
                      >
                        <span className="text-sm text-gray-600 dark:text-gray-500 min-w-[30px]">
                          {String(rowIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg text-white dark:text-black">
                          {row.join(', ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
