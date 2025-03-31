import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <a className="text-2xl font-mono font-bold">yourname</a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="/resume.pdf" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <button 
              className="bg-button hover:bg-button/80 px-4 py-2 rounded-full transition-colors"
              onClick={() => setContactModalOpen(true)}
            >
              Contact
            </button>
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
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-accent transition-colors">
                Projects
              </a>
              <a href="/resume.pdf" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <button 
                className="bg-button hover:bg-button/80 px-4 py-2 rounded-full transition-colors w-full"
                onClick={() => {
                  setIsOpen(false);
                  setContactModalOpen(true);
                }}
              >
                Contact
              </button>
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