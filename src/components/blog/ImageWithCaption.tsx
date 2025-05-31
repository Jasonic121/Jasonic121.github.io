import React, { useState, useEffect } from 'react';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder during SSR
    return (
      <figure className="my-8">
        <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse" />
        <figcaption className="text-center italic text-gray-500 mt-4">
          Loading...
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-xl shadow-2xl transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <figcaption className="text-center italic text-gray-500 mt-4">
        {caption}
      </figcaption>
    </figure>
  );
}; 