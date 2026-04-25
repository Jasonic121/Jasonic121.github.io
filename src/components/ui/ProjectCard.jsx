import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaEye } from 'react-icons/fa';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <motion.div 
      className={`bg-background/30 border-4 ${project.featured ? 'border-accent/50' : 'border-gray-800'} rounded-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-[1.02] hover:-translate-y-2 relative group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 bg-accent text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
          <FaStar className="text-xs" />
          <span>Featured</span>
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            {project.detailsUrl && (
              <a 
                href={project.detailsUrl} 
                className="group/button inline-flex items-center h-12 w-12 hover:w-36 rounded-full bg-white/90 text-gray-900 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-white overflow-hidden"
                aria-label="View Details"
              >
                <div className="flex items-center w-full">
                  <div className="flex items-center justify-center w-12 flex-shrink-0">
                    <FaEye className="text-xl" />
                  </div>
                  <span className="font-bold text-sm whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 pr-4">View Details</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-background/50 border border-gray-700 rounded-full px-3 py-1 transition-colors duration-300 group-hover:border-accent/50">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 