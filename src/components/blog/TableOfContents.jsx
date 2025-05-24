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
      className={`w-full p-6 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-background/80' : 'bg-background/30'} 
        backdrop-blur-sm rounded-xl border border-gray-800 table-of-contents 
        max-h-[calc(100vh-8rem)] overflow-y-auto
        ${isScrolled ? 'shadow-lg shadow-black/10' : ''}
      `}
    >
      <h3 className="text-lg font-bold mb-6">Table of Contents</h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 2 ? 'ml-4' : ''
            } transition-all duration-200`}
          >
            <button
              onClick={() => scrollToSection(heading.id)}
              className={`text-left w-full hover:text-accent transition-colors py-1 ${
                activeId === heading.id
                  ? 'text-accent font-medium active pl-4 border-l-2 border-accent'
                  : 'text-gray-400 pl-4'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents; 