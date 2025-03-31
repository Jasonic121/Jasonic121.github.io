import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { education } from '../../data/education';
import { experience } from '../../data/experience';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
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
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/workspace.jpg" 
                alt="Workspace" 
                layout="fill" 
                objectFit="cover"
              />
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
              I am a new grad Software Engineer just graduated from University. My passion lies in developing innovative software solutions, particularly in the realms of web development and machine learning. With experience in full-stack development, I've worked on projects ranging from e-commerce platforms to AI-driven applications.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              My toolkit includes <span className="text-accent">Python</span>, <span className="text-accent-2">JavaScript</span>, and <span className="text-accent-3">C++</span>, as well as frameworks such as <span className="text-accent">React.js</span>, <span className="text-accent-2">Node.js</span>, and <span className="text-accent-3">Pytorch</span>. Always eager to learn and tackle new challenges, I'm excited about opportunities to create impactful applications that push the boundaries of technology.
            </p>
            
            <div className="flex border-b border-gray-800 mb-6">
              <button 
                className={`px-4 py-2 ${activeTab === 'skills' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'education' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'experience' ? 'border-b-2 border-accent text-accent' : 'text-gray-400'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
            </div>
            
            {activeTab === 'skills' && (
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-accent mr-2">•</span> {skill}
                  </li>
                ))}
              </ul>
            )}
            
            {activeTab === 'education' && (
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-gray-400">{item.institution}, {item.duration}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="space-y-4">
                {experience.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-xl font-bold">{item.position}</h3>
                    <p className="text-gray-400">{item.company}, {item.duration}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 