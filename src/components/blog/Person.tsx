import React, { useState, useEffect } from 'react';
import ImageGallery from '../ui/ImageGallery';

interface PersonProps {
  name: string;
  role: string;
  type: string;
  images?: string[];
  captions?: string[];
  description?: string;
  link: string;
  isLinkActive?: boolean;
}

export const Person: React.FC<PersonProps> = ({ 
  name, 
  role, 
  type, 
  images = [], 
  captions = [],
  description,
  link, 
  isLinkActive = false 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const content = (
    <div className="card-content bg-gray-800/50 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
        type === 'mentor' ? 'bg-blue-900/50 text-blue-300' :
        type === 'friend' ? 'bg-green-900/50 text-green-300' :
        'bg-purple-900/50 text-purple-300'
      }`}>
        {role}
      </span>
      
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
      
      {isLinkActive && (
        <span className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors">
          View Profile →
        </span>
      )}
    </div>
  );

  if (!isClient) {
    return (
      <div className="person-card animate-pulse">
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