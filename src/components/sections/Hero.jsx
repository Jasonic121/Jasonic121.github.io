import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import AnimatedCounter from '../ui/AnimatedCounter';

// Create a separate client-only component for the typing effect
const TypedText = () => {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    // Only import and initialize Typed.js on the client side after component is mounted
    let typedInstance = null;
    
    if (mounted && elementRef.current) {
      const importTyped = async () => {
        try {
          const Typed = (await import('typed.js')).default;
          
          // Initialize typed only when the DOM element is available
          typedInstance = new Typed(elementRef.current, {
            strings: [
              'Jason Li',
              'Software Engineer',
              'Problem Solver',
              'AI Enthusiast',
            ],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
          });
        } catch (error) {
          console.error('Error initializing Typed.js:', error);
        }
      };
      
      importTyped();
    }
    
    // Clean up the Typed instance when the component unmounts
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, [mounted]);
  
  // Return a simple span when not mounted (server-side)
  if (!mounted) {
    return <span className="text-white">Software Engineer</span>;
  }
  
  // Return an element with a ref that Typed.js will target
  return <span ref={elementRef} className="text-white"></span>;
};

// Client-side only motion component
const MotionWrapper = ({ children, className, initial, animate, transition }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return a simple div during server-side rendering
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }
  
  // Using a dynamic component with Next.js dynamic import
  const DynamicMotion = () => {
    const [MotionDiv, setMotionDiv] = useState(null);
    
    useEffect(() => {
      // Import the motion component dynamically
      import('framer-motion').then((mod) => {
        setMotionDiv(() => mod.motion.div);
      });
    }, []);
    
    if (!MotionDiv) {
      return <div className={className}>{children}</div>;
    }
    
    return (
      <MotionDiv
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </MotionDiv>
    );
  };
  
  return <DynamicMotion />;
};

const Hero = () => {
  const [contactButtonText, setContactButtonText] = useState('Contact');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('jason.li.jobs@gmail.com');
    // Update button text
    setContactButtonText('Copied!');
    // Reset button text after 2 seconds
    setTimeout(() => {
      setContactButtonText('Contact');
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <MotionWrapper 
            className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-amber-400"></div>
              <div className="absolute inset-[2px] rounded-full overflow-hidden">
                <Image 
                  src="/images/profilepic.jpg" 
                  alt="Profile" 
                  width={500}
                  height={500}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper 
            className="w-full md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 text-transparent bg-clip-text">Hello I'm</span>
            </h2>
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-4">
              <TypedText />
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              I am a Software Engineer just graduated from Carnegie Mellon University studying Computer Engineering and I am proficient in various programming languages and technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/Resume_JasonLi.pdf" 
                download="Resume_JasonLi.pdf"
                className="mt-2 inline-flex px-[2px] py-[2px] rounded-full font-bold bg-gradient-to-br from-blue-400 to-amber-400 hover:bg-slate-900 text-white" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center bg-black hover:bg-gradient-to-br hover:from-blue-400 hover:to-amber-400 rounded-full px-7 py-2">Resume</span>
              </a>

              <button 
                className="mt-2 inline-flex items-center font-bold py-2 px-7 border-2 rounded-full transition-all duration-300 ease-in-out border-blue-400 text-gray-300 hover:bg-blue-400 hover:text-white"
                onClick={copyEmailToClipboard}
              >
                <svg className="h-4 w-4 mr-2 pb-[1px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 4v16h24V4H0zm22 2v.01L12 13 2 6V6h20zM2 18V8l10 7 10-7v10H2z"></path>
                </svg>
                <span>{contactButtonText}</span>
              </button>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/jasonli121/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group mt-2 inline-flex items-center justify-center h-12 w-12 hover:w-28 rounded-full border-2 border-blue-400 text-gray-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 overflow-hidden"
                aria-label="LinkedIn Profile"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300">
                  <div className="flex justify-center w-12 group-hover:w-0 transition-all duration-300 overflow-hidden">
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                  <span className="font-bold w-0 group-hover:w-full overflow-hidden transition-all duration-300 flex items-center justify-center">LinkedIn</span>
                </div>
              </a>
              
              <a 
                href="https://github.com/Jasonic121" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group mt-2 inline-flex items-center justify-center h-12 w-12 hover:w-28 rounded-full border-2 border-blue-400 text-gray-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 overflow-hidden"
                aria-label="GitHub Profile"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300">
                  <div className="flex justify-center w-12 group-hover:w-0 transition-all duration-300 overflow-hidden">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <span className="font-bold w-0 group-hover:w-full overflow-hidden transition-all duration-300 flex items-center justify-center">GitHub</span>
                </div>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group mt-2 inline-flex items-center justify-center h-12 w-12 hover:w-28 rounded-full border-2 border-pink-600 text-gray-300 hover:border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 overflow-hidden"
                aria-label="Instagram Profile"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300">
                  <div className="flex justify-center w-12 group-hover:w-0 transition-all duration-300 overflow-hidden">
                    <FaInstagram className="h-6 w-6" />
                  </div>
                  <span className="font-bold w-0 group-hover:w-full overflow-hidden transition-all duration-300 flex items-center justify-center">Instagram</span>
                </div>
              </a>
            </div>
          </MotionWrapper>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16">
          <div className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full">
            <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row">
              <AnimatedCounter end={getCoffeeCount()} label="" />
            </h2>
            <p className="text-[#ADB7BE] text-base">Coffees Drank This Year ☕</p>
          </div>
          <div className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full">
            <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row">
              <AnimatedCounter end={7} label="" />
            </h2>
            <p className="text-[#ADB7BE] text-base">Countries Visited 🌍</p>
          </div>
          <div className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full">
            <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row">
              <AnimatedCounter end={3} label="" />
            </h2>
            <p className="text-[#ADB7BE] text-base">Companies Worked At 💼</p>
          </div>
          <div className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full">
            <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row">
              <AnimatedCounter end={4} label="" />
            </h2>
            <p className="text-[#ADB7BE] text-base">Side Projects Ongoing 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const getCoffeeCount = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const today = new Date();
  const daysPassed = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  const coffeesPerDay = 1; // or make this a float like 1.5 if you want
  return daysPassed * coffeesPerDay;
};

export default Hero; 