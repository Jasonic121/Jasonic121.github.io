import React, { useState, useEffect } from 'react';

interface PersonProps {
  name: string;
  role: string;
  type: string;
  image: string;
  link: string;
}

export const Person: React.FC<PersonProps> = ({ name, role, type, image, link }) => {
  const [isClient, setIsClient] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="person-card animate-pulse">
        <div className="bg-gray-200 h-48 w-full" />
        <div className="person-info">
          <div className="h-6 bg-gray-200 w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <a href={link} className="person-card">
      <img 
        src={image} 
        alt={name} 
        className={`person-image transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="person-info">
        <h3>{name}</h3>
        <span className={`tag ${type}`}>{role}</span>
        <span className="view-profile">View Profile →</span>
      </div>
    </a>
  );
}; 