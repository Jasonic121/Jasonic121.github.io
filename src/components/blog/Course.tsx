import React, { useState, useEffect } from 'react';

interface CourseProps {
  code: string;
  title: string;
  type: string;
  link: string;
}

export const Course: React.FC<CourseProps> = ({ code, title, type, link }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="course-link animate-pulse">
        <div className="course-content">
          <div className="h-5 bg-gray-200 w-1/4 mb-2" />
          <div className="h-4 bg-gray-200 w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 w-1/4" />
        </div>
      </div>
    );
  }

  return (
    <a href={link} className="course-link">
      <div className="course-content flex items-center gap-4">
        <strong className="flex-shrink-0">{code}</strong>
        <span className="course-title flex-grow">{title}</span>
        <span className={`tag ${type} flex-shrink-0`}>{type}</span>
      </div>
    </a>
  );
}; 