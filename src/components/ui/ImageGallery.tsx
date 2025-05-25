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

  // // Auto-advance to next image
  // useEffect(() => {
  //   if (isPaused || images.length <= 1) return;

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, autoplayInterval);

  //   return () => clearInterval(interval);
  // }, [isPaused, autoplayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={`relative w-full h-[400px] overflow-hidden rounded-lg ${className}`}>
      {/* Single image display */}
      <div
        className="w-full h-full flex items-center justify-center px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={images[currentIndex]}
          alt={alts[currentIndex] || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg transition-opacity duration-500"
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

      {/* Navigation progress bars - only show if we have more than 1 image */}
      {/* {images.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 w-full max-w-[200px] z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-1 group"
              aria-label={`Go to image ${index + 1}`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-full'
                    : 'bg-white/50 group-hover:bg-white/75 w-full'
                }`}
              />
            </button>
          ))}
        </div>
      )} */}

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
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;