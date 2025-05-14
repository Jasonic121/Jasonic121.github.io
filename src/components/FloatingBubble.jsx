import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const FloatingBubble = ({ children, initialPosition, delay = 0, index = 0, totalCount = 1 }) => {
  const controls = useAnimationControls();
  const animationRef = useRef(null);
  
  // Generate random animation parameters
  const [animation] = useState(() => {
    // Determine which row this bubble should be in (top or bottom)
    const isTopRow = index % 2 === 0;
    
    // Calculate vertical position based on row with random range
    const topRowRange = Math.random() * 50 + 25; // Random position between 25-75px
    const bottomRowRange = Math.random() * 50 + 175; // Random position between 175-225px
    const yPosition = isTopRow ? topRowRange : bottomRowRange;
    
    // Calculate horizontal distance to travel (container width + bubble width)
    const distance = 2000; // Wider to ensure full traversal on all screen sizes
    
    // Use faster animation duration
    const duration = 30; // Reduced from 30 to 20 seconds
    
    // Calculate delay based on index to spread bubbles horizontally
    // Each bubble starts 1/8 of the total duration after the previous one (reduced from 1/6)
    const baseDelay = (index * duration) / 8;
    
    // Smaller vertical bobbing motion
    const yVariation = 5 + Math.random() * 5; // Increased from 1 + Math.random() * 1
    
    return {
      x: -distance,
      yPosition,
      yVariation,
      duration,
      delay: baseDelay
    };
  });
  
  // Generate a smaller rotation for subtle effect
  const rotation = Math.random() * 10 - 5; // Increased from Math.random() * 2 - 1
  
  // Get a random bubble style from site color scheme
  const [bubbleStyle] = useState(() => {
    const colors = [
      'bg-accent/30',
      'bg-accent-2/30',
      'bg-accent-3/30',
      'bg-button/30',
    ];
    
    const borderClasses = [
      'border-accent/50',
      'border-accent-2/50',
      'border-accent-3/50',
      'border-button/50',
    ];
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    
    return {
      colorClass: colors[colorIndex],
      borderClass: borderClasses[colorIndex],
      textClass: colorIndex === 0 ? 'text-accent' : 
                 colorIndex === 1 ? 'text-accent-2' : 
                 colorIndex === 2 ? 'text-accent-3' : 
                 'text-button',
    };
  });

  // Start the animation when component mounts
  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      x: [0, animation.x],
      y: [0, animation.yVariation, -animation.yVariation, animation.yVariation, 0],
      rotate: [0, rotation, -rotation, rotation, 0],
      transition: {
        x: {
          duration: animation.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: (totalCount * animation.duration) / 8 - animation.duration
        },
        y: {
          duration: animation.duration / 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: animation.duration / 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }, // Faster fade in
        scale: { duration: 0.5 }, // Faster scale animation
        delay: animation.delay
      }
    });
  }, []);

  return (
    <motion.div
      className={`absolute rounded-xl overflow-hidden backdrop-blur-sm ${bubbleStyle.colorClass} border ${bubbleStyle.borderClass} shadow-lg`}
      style={{ 
        right: -220,
        top: animation.yPosition,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
        width: 'max-content',
        maxWidth: '220px'
      }}
      animate={controls}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        rotate: 0,
        x: 0
      }}
      whileHover={{ 
        scale: 1.05, 
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-4 max-w-[220px] bg-black/40">
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === 'div') {
            return React.cloneElement(child, {
              className: `p-4 max-w-[220px]`
            }, 
            React.Children.map(child.props.children, (subChild, index) => {
              if (React.isValidElement(subChild) && subChild.type === 'p') {
                if (index === 0) {
                  return React.cloneElement(subChild, {
                    className: `font-bold text-sm ${bubbleStyle.textClass}`
                  });
                }
                if (index === 1) {
                  return React.cloneElement(subChild, {
                    className: "text-sm mt-1 text-white font-medium"
                  });
                }
                if (index === 2) {
                  return React.cloneElement(subChild, {
                    className: "text-xs text-white/60 mt-2"
                  });
                }
              }
              return subChild;
            }));
          }
          return child;
        })}
      </div>
    </motion.div>
  );
};

export default FloatingBubble; 