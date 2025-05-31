import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images?: string[];
  alts?: string[];
  captions?: string[];
  // autoplayInterval?: number;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images = [],
  alts = [],
  captions = [],
  // autoplayInterval = 100000,
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // If images is undefined or empty, return null early
  if (!images?.length) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`}>
      {/* Single image display at original size */}
      <div
        className="w-full flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={images[currentIndex]}
          alt={alts[currentIndex] || `Image ${currentIndex + 1}`}
          className="max-h-[70vh] h-full w-auto object-contain rounded-xl shadow-lg transition-opacity duration-500 mx-auto"
        />
      </div>

      {/* Caption overlay */}
      {captions[currentIndex] && (
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20">
          <p className="text-center text-white text-xs font-medium drop-shadow-lg">
            {captions[currentIndex]}
          </p>
        </div>
      )}

      {/* Navigation arrows - only show if we have more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;