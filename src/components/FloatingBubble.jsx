import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const FloatingBubble = ({ children, initialPosition, delay = 0, index = 0, totalCount = 1 }) => {
  const controls = useAnimationControls();
  const animationRef = useRef(null);
  
  // Generate random animation parameters
  const [animation] = useState(() => {
    // Calculate vertical position based on index to avoid overlaps
    // If we have the index and total count, evenly distribute bubbles
    let yPosition;
    if (index !== undefined && totalCount > 1) {
      // Only use the top third of the container (500px / 3 ≈ 167px)
      // Leave 120px spacing for bubble height within this region
      const maxHeight = 167;
      const availableHeight = maxHeight - 120;
      const sectionHeight = availableHeight / totalCount;
      // Position each bubble exactly in the middle of its section
      yPosition = (index * sectionHeight) + (sectionHeight / 2);
      
      // Keep bubbles within reasonable bounds (30px-140px)
      yPosition = Math.max(30, Math.min(yPosition, 140));
    } else {
      // Fallback to upper area if index/totalCount aren't provided
      yPosition = 85; // Middle of the upper third
    }
    
    // Calculate horizontal distance to travel (container width + bubble width)
    const distance = 2000; // Wider to ensure full traversal on all screen sizes
    
    // Use consistent speed for all bubbles
    const duration = 30; // Fixed 30 seconds for all bubbles
    
    // Calculate delay based on index to spread bubbles horizontally
    // Each bubble starts 1/6 of the total duration after the previous one
    // This creates more frequent bubbles while still maintaining spacing
    const baseDelay = (index * duration) / 6;
    
    // Smaller vertical bobbing motion
    const yVariation = 1 + Math.random() * 1; // Further reduced vertical variation
    
    return {
      x: -distance, // Move left (negative x direction)
      yPosition,
      yVariation,
      duration,
      delay: baseDelay // Use calculated delay for even horizontal spacing
    };
  });
  
  // Generate a smaller rotation for subtle effect
  const rotation = Math.random() * 2 - 1; // Reduced rotation range
  
  // Get a random bubble style from site color scheme
  const [bubbleStyle] = useState(() => {
    // Bubble background colors based on the website's theme
    const colors = [
      'bg-accent/30',     // Teal accent - increased opacity from 10% to 30%
      'bg-accent-2/30',   // Purple accent - increased opacity from 10% to 30%
      'bg-accent-3/30',   // Orange accent - increased opacity from 10% to 30%
      'bg-button/30',     // Button color (purple) - increased opacity from 10% to 30%
    ];
    
    // Matching border colors
    const borderClasses = [
      'border-accent/50',  // Increased opacity from 30% to 50%
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
    // Calculate safe vertical movement range based on index
    // Less vertical movement for higher bubble counts
    const safeYVariation = totalCount > 3 ? animation.yVariation / 2 : animation.yVariation;
    
    controls.start({
      opacity: 1,
      scale: 1,
      x: [0, animation.x],
      y: [0, safeYVariation, -safeYVariation, safeYVariation, 0],
      rotate: [0, rotation, 0, -rotation, 0],
      transition: {
        x: {
          duration: animation.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: (totalCount * animation.duration) / 6 - animation.duration // Wait for all bubbles to finish before repeating
        },
        y: {
          duration: animation.duration / 8, // Even slower vertical movement
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: animation.duration / 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        delay: animation.delay
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={`absolute rounded-xl overflow-hidden backdrop-blur-sm ${bubbleStyle.colorClass} border ${bubbleStyle.borderClass} shadow-lg`}
      style={{ 
        // Position at the right edge of the container
        right: -220, // Start just outside the right edge
        top: animation.yPosition, // Position based on calculated vertical position
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)', // Add subtle glow effect
        width: 'max-content', // Ensure the bubble takes only the space it needs
        maxWidth: '220px' // Maximum width constraint
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
          // If it's a direct text content div, apply our styling
          if (React.isValidElement(child) && child.type === 'div') {
            return React.cloneElement(child, {
              className: `p-4 max-w-[220px]`
            }, 
            // Process its children to apply the right text color
            React.Children.map(child.props.children, (subChild, index) => {
              if (React.isValidElement(subChild) && subChild.type === 'p') {
                // First paragraph (name) gets the accent color
                if (index === 0) {
                  return React.cloneElement(subChild, {
                    className: `font-bold text-sm ${bubbleStyle.textClass}`
                  });
                }
                // Message text is white
                if (index === 1) {
                  return React.cloneElement(subChild, {
                    className: "text-sm mt-1 text-white font-medium"
                  });
                }
                // Timestamp stays semi-transparent
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