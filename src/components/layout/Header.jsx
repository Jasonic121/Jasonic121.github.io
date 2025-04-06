import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    // Prevent automatic scrolling to anchor on page load
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (e, id) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on the homepage, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the homepage, navigate to homepage with anchor
      router.push(`/#${id}`);
    }
    
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-mono font-bold text-amber-400">JasonLi</a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex font-mono space-x-12">
            <a href="#about" onClick={(e) => navigateToSection(e, 'about')} className="hover:text-accent transition-colors text-xl">
              About
            </a>
            <a href="#projects" onClick={(e) => navigateToSection(e, 'projects')} className="hover:text-accent transition-colors text-xl">
              Projects
            </a>
            <Link href="/blog">
              <a className="hover:text-accent transition-colors text-xl">Blog</a>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#about" onClick={(e) => navigateToSection(e, 'about')} className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#projects" onClick={(e) => navigateToSection(e, 'projects')} className="hover:text-accent transition-colors">
                Projects
              </a>
              <Link href="/blog">
                <a className="hover:text-accent transition-colors">Blog</a>
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </>
  );
};

export default Header; 