import React, { useState } from 'react';

interface ImageGalleryProps {
  images?: string[];
  alts?: string[];
  autoplayInterval?: number;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images = [],
  alts = [],
  autoplayInterval = 5000,
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // If images is undefined or empty, return null early
  if (!images?.length) return null;

  // Calculate the animation duration based on the number of images and interval
  const animationDuration = (autoplayInterval * images.length) / 1000; // Convert to seconds

  // Double the images to create seamless loop
  const extendedImages = [...images, ...images];

  return (
    <div 
      className={`relative w-full h-[400px] overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex animate-scroll h-full absolute"
        style={{
          animationDuration: `${animationDuration}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
          gap: '1rem', // Add spacing between images
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="flex-none h-full"
            style={{ 
              width: '600px', // Fixed width for each image container
              minWidth: '600px', // Ensure the width is maintained
            }}
          >
            <img
              src={image}
              alt={alts[index % images.length] || `Image ${(index % images.length) + 1}`}
              className="w-full h-full"
              style={{
                objectFit: 'contain', // Changed to contain to prevent cropping
                objectPosition: 'center',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

// Add this to your global CSS or a style tag
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;