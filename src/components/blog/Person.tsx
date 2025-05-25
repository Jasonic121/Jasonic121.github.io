import React, { useState, useEffect } from 'react';
import ImageGallery from '../ui/ImageGallery';

interface PersonProps {
  name: string;
  role: string;
  type: string;
  images?: string[];
  description?: string;
  link: string;
  isLinkActive?: boolean;
}

export const Person: React.FC<PersonProps> = ({ 
  name, 
  role, 
  type, 
  images = [], 
  description,
  link, 
  isLinkActive = false 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const image = images[0] || '';

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = (
    <>
      {images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <ImageGallery 
            images={images} 
            className="absolute inset-0"
          />
        </div>
      )}
      <div className={`person-info ${images.length > 0 ? 'mt-4' : ''}`}>
        <h3>{name}</h3>
        <span className={`tag ${type}`}>{role}</span>
        {description && (
          <p className="mt-2 text-gray-400 text-sm">{description}</p>
        )}
        {isLinkActive && <span className="view-profile">View Profile →</span>}
      </div>
    </>
  );

  if (!isClient) {
    return (
      <div className="person-card animate-pulse">
        {images.length > 0 && (
          <div className="h-48 bg-gray-200 w-full rounded-lg" />
        )}
        <div className={`person-info ${images.length > 0 ? 'mt-4' : ''}`}>
          <div className="h-6 bg-gray-200 w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 w-1/2" />
          {description && (
            <div className="h-4 bg-gray-200 w-full mt-2" />
          )}
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