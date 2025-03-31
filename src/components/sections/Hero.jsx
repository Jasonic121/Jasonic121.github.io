import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import AnimatedCounter from '../ui/AnimatedCounter';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image 
                src="/images/profile.jpg" 
                alt="Profile" 
                layout="fill" 
                objectFit="cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Hello I'm</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Name</h1>
            <p className="text-lg text-gray-300 mb-8">
              I am a Software Engineer specializing in web development and machine learning. 
              With experience in full-stack development, I've worked on projects ranging from 
              e-commerce platforms to AI-driven applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <button className="btn-primary" onClick={() => document.getElementById('contact-button').click()}>
                Contact
              </button>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition-colors">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <AnimatedCounter end={5} label="years Coding Exp." />
          <AnimatedCounter end={8} label="GitHub repos" />
          <AnimatedCounter end={7} label="Commits this week" />
          <AnimatedCounter end={NaN} label="LeetCode Contest Rating" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 