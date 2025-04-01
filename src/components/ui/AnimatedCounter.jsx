import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  
  // Setup and check if component is mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
    
    // Setup intersection observer only on client side
    if (typeof window !== 'undefined' && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);
  
  // Animate the counter when in view and mounted
  useEffect(() => {
    if (isInView && isMounted) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * end));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration, isMounted]);
  
  return (
    <div ref={ref}>
      {isNaN(count) ? 'NaN' : count}
      {label && <p className="text-[#ADB7BE] text-base">{label}</p>}
    </div>
  );
};

export default AnimatedCounter; 