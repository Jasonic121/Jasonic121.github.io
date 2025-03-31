import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-background/30 border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <Image 
          src={project.image} 
          alt={project.title} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-background/50 border border-gray-700 rounded-full px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 