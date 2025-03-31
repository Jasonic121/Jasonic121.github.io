import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-full transition-colors';
  
  const variantClasses = {
    primary: 'bg-button hover:bg-button/80 text-white',
    outline: 'bg-transparent border border-accent hover:bg-accent/10 text-accent',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 