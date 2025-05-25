import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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
  }, [isMounted, router.asPath]);

  if (!isMounted) {
    return (
      <div className="sticky top-24">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-3/4"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className={`${activeId === heading.id ? 'text-blue-500' : 'text-gray-400'} hover:text-white transition-colors`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;