import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import { education } from '../../data/education';
import { experience } from '../../data/experience';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/assets/images/Graduation.JPG',
    '/assets/images/apple-jason.JPG',
    '/assets/images/logi-jason.png',
    '/assets/images/CMU-id.jpg',
    '/assets/images/AboutMe.JPG',
    '/assets/images/jason-conference.JPG'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Increased to 5 seconds to give more time to view each image

    return () => clearInterval(timer);
  }, []);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[700px] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Profile" 
                  className="w-full h-full object-cover absolute"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-accent scale-125' 
                        : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-8">
              I'm Jason Li, a recent graduate with a Master's degree in Electrical and Computer Engineering from Carnegie Mellon University. I'm deeply passionate about building things—from scalable backend systems to AI-powered applications that tackle real-world challenges. Whether it's deploying full-stack apps or conducting research with large language models, I thrive on learning and innovating at the intersection of software and intelligence.            </p>
            <p className="text-lg text-gray-300 mb-8">
              My toolkit includes <span className="text-accent">Python</span>, <span className="text-accent-2">Java</span>, and <span className="text-accent-3">Swift</span>, as well as frameworks such as <span className="text-accent">React.js</span>, <span className="text-accent-2">Node.js</span>, and <span className="text-accent-3">Pytorch</span>. Always eager to learn and tackle new challenges, I'm excited about opportunities to create impactful applications that push the boundaries of technology.
            </p>
            
            <div className="flex border-b border-gray-800 mb-6">
              <button 
                className={`px-4 py-2 ${activeTab === 'experience' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'education' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'skills' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>
            
            <div className="min-h-[400px]">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent mb-3">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java", "C++", "JavaScript", "Swift"].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent-2 mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Node.js", "PyTorch", "Docker", "AWS", "Git"].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent-3 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "iOS Development", "Software Development", "Large Language Models"].map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-8">
                  {education.map((item) => (
                    <div key={item.id} className="relative pl-8 border-l-2 border-accent">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-accent">{item.institution}</h3>
                        <p className="text-lg text-gray-300">{item.degree}</p>
                        {item.duration && (
                          <p className="text-sm text-gray-400">{item.duration}</p>
                        )}
                        {item.description && (
                          <p className="text-gray-300 mt-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experience.map((item) => (
                    <div key={item.id} className={`relative pl-8 border-l-2 ${item.isUpcoming ? 'border-accent' : 'border-accent-2'}`}>
                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${item.isUpcoming ? 'bg-accent' : 'bg-accent-2'}`}></div>
                      <div className="space-y-2">
                        <h3 className={`text-2xl font-bold ${item.isUpcoming ? 'text-accent' : 'text-accent-2'}`}>{item.company}</h3>
                        <p className="text-lg text-gray-300">{item.position}</p>
                        <p className="text-sm text-gray-400">{item.duration}</p>
                        {item.isUpcoming && (
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full">
                            Upcoming Position
                          </span>
                        )}
                        {item.description && (
                          <p className="text-gray-300 mt-2">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 