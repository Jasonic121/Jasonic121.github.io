import React from 'react';

const ImageGrid = ({ 
  layout = 'grid',
  images,
  alts,
  captions,
  // Single image props
  src,
  alt,
  caption
}) => {
  // Handle single image layout
  if (layout === 'full' || (!images && src)) {
    return (
      <figure className="my-8">
        <img 
          src={src} 
          alt={alt || ''} 
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {caption && (
          <figcaption className="text-center text-gray-400 mt-2 text-sm italic">{caption}</figcaption>
        )}
      </figure>
    );
  }

  // Handle array of images
  if (layout === 'side-by-side' && Array.isArray(images)) {
    return (
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((imgSrc, index) => (
          <figure key={`${imgSrc}-${index}`} className="relative">
            <img 
              src={imgSrc} 
              alt={alts?.[index] || ''} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {captions?.[index] && (
              <figcaption className="text-center text-gray-400 mt-2 text-sm italic">
                {captions[index]}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  // Default grid layout
  if (Array.isArray(images)) {
    return (
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imgSrc, index) => (
          <figure key={`${imgSrc}-${index}`} className="relative group">
            <img 
              src={imgSrc} 
              alt={alts?.[index] || ''} 
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            {captions?.[index] && (
              <figcaption className="text-center text-gray-400 mt-2 text-sm italic">
                {captions[index]}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  return null;
};

export default ImageGrid; 