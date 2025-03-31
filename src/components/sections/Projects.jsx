import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button 
              className={`px-6 py-2 rounded-l-full ${filter === 'all' ? 'bg-button text-white' : 'bg-transparent border border-gray-700 text-gray-400'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 ${filter === 'web' ? 'bg-button text-white' : 'bg-transparent border-t border-b border-gray-700 text-gray-400'}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`px-6 py-2 rounded-r-full ${filter === 'ai' ? 'bg-button text-white' : 'bg-transparent border border-gray-700 text-gray-400'}`}
              onClick={() => setFilter('ai')}
            >
              AI
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 