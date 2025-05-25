import React, { useEffect, useState } from 'react';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Get all heading elements from the content
    const elements = document.querySelectorAll('h1, h2');
    const headingElements = Array.from(elements).map((element) => ({
      id: element.id || element.textContent.toLowerCase().replace(/\s+/g, '-'),
      text: element.textContent,
      level: parseInt(element.tagName.substring(1)),
    }));

    setHeadings(headingElements);

    // Add IDs to headings if they don't have one
    elements.forEach((element) => {
      if (!element.id) {
        element.id = element.textContent.toLowerCase().replace(/\s+/g, '-');
      }
    });

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    // Handle scroll for visual effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [content]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`w-full transition-all duration-500 ease-in-out transform
        ${isScrolled ? 'bg-gray-900/90' : 'bg-gray-900/60'} 
        backdrop-blur-xl rounded-2xl border border-gray-700/50 table-of-contents 
        max-h-[calc(100vh-8rem)] overflow-y-auto
        ${isScrolled ? 'shadow-2xl shadow-black/20 scale-105' : 'shadow-lg shadow-black/10'}
        hover:shadow-2xl hover:shadow-black/20
      `}
    >
      {/* Header with gradient */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h3 className="text-lg font-bold text-white">Table of Contents</h3>
        </div>
      </div>
      
      {/* Navigation items */}
      <div className="p-4">
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li
              key={heading.id}
              className={`${
                heading.level === 2 ? 'ml-6' : ''
              } transition-all duration-300`}
            >
              <button
                onClick={() => scrollToSection(heading.id)}
                className={`text-left w-full transition-all duration-300 py-3 px-4 rounded-xl group relative overflow-hidden ${
                  activeId === heading.id
                    ? 'text-blue-400 font-semibold bg-blue-500/10 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-3">
                  {/* Indicator dot */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeId === heading.id 
                      ? 'bg-blue-400 shadow-lg shadow-blue-400/50' 
                      : 'bg-gray-500 group-hover:bg-gray-400'
                  }`}></div>
                  
                  {/* Text */}
                  <span className={`transition-all duration-300 ${
                    heading.level === 1 ? 'text-base font-semibold' : 'text-sm'
                  }`}>
                    {heading.text}
                  </span>
                </div>
                
                {/* Active indicator line */}
                {activeId === heading.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer with scroll indicator */}
      {headings.length > 0 && (
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{headings.length} sections</span>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Reading</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TableOfContents;