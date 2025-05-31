import React, { useState, useEffect } from 'react';
import ImageGallery from '../ui/ImageGallery';

interface EventProps {
  title: string;
  type: string;
  link: string;
  images?: string[];
  captions?: string[];
  description?: string;
  isLinkActive?: boolean;
}

export const Event: React.FC<EventProps> = ({ 
  title, 
  type, 
  link, 
  images = [], 
  captions = [],
  description,
  isLinkActive = false 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = (
    <div className="card-content bg-gray-800/50 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-900/50 text-amber-300 mb-4">{type}</span>
      {images.length > 0 && (
        <div className="relative w-full rounded-lg mb-4">
          <ImageGallery 
            images={images} 
            captions={captions}
            className="w-full"
          />
        </div>
      )}
      {description && (
        <p className="text-gray-400">{description}</p>
      )}
      {isLinkActive && <span className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors">View Gallery →</span>}
    </div>
  );

  if (!isClient) {
    return (
      <div className="experience-card animate-pulse">
        <div className="card-content bg-gray-800/50 rounded-xl p-6">
          <div className="h-6 bg-gray-700 w-3/4 mb-2 rounded" />
          <div className="h-4 bg-gray-700 w-1/4 mb-4 rounded" />
          {images.length > 0 && (
            <div className="h-[300px] bg-gray-700 w-full rounded-lg mb-4" />
          )}
          {description && (
            <div className="h-4 bg-gray-700 w-full rounded" />
          )}
        </div>
      </div>
    );
  }

  if (isLinkActive) {
    return (
      <a href={link} className="block hover:transform hover:scale-[1.02] transition-transform duration-300">
        {content}
      </a>
    );
  }

  return (
    <div className="block">
      {content}
    </div>
  );
}; 