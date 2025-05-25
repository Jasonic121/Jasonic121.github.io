import React from 'react';
import TableOfContents from './TableOfContents';

const BlogLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Main content - centered with enhanced styling */}
            <article className="w-full lg:w-[calc(100%-20rem)] lg:ml-0 lg:mr-auto">
              <div className="relative">
                {/* Content wrapper with subtle border and background */}
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                  <div className="p-8 lg:p-12">
                    {children}
                  </div>
                </div>
                
                {/* Decorative gradient line */}
                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl opacity-60"></div>
              </div>
            </article>
            
            {/* Enhanced Table of Contents sidebar */}
            <aside className="hidden lg:block w-80 relative">
              <div className="sticky top-24">
                <TableOfContents content={children} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;