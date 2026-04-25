import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-background/30 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/">
            <a className="text-xl font-mono font-bold mb-4 md:mb-0">JasonLi</a>
          </Link>
          
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 