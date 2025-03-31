import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-background/30 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/">
            <a className="text-xl font-mono font-bold mb-4 md:mb-0">yourname</a>
          </Link>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition-colors">
              <FaInstagram />
            </a>
          </div>
          
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 