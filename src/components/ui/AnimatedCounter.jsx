import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
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
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);
  
  return (
    <div ref={ref} className="p-4 border border-gray-800 rounded-lg text-center">
      <h3 className="text-3xl font-bold mb-2">
        {isNaN(count) ? 'NaN' : count}
      </h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

export default AnimatedCounter; 