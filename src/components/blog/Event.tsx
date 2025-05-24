import React, { useState, useEffect } from 'react';

interface EventProps {
  title: string;
  type: string;
  link: string;
  image: string;
}

export const Event: React.FC<EventProps> = ({ title, type, link, image }) => {
  const [isClient, setIsClient] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="experience-card animate-pulse">
        <div className="card-content">
          <div className="h-6 bg-gray-200 w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 w-1/4 mb-4" />
          <div className="h-32 bg-gray-200 w-full rounded" />
        </div>
      </div>
    );
  }

  return (
    <a href={link} className="experience-card">
      <div className="card-content">
        <h3>{title}</h3>
        <span className="tag event">{type}</span>
        <img 
          src={image} 
          alt={title} 
          className={`card-image transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <span className="view-gallery">View Gallery →</span>
      </div>
    </a>
  );
}; 