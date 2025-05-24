import React from 'react';
import TableOfContents from './TableOfContents';

const BlogLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Main content - centered */}
          <article className="w-full lg:w-[calc(100%-18rem)] lg:ml-0 lg:mr-auto">
            {children}
          </article>
          
          {/* Table of Contents sidebar */}
          <aside className="hidden lg:block w-72 relative">
            <div className="sticky top-24">
              <TableOfContents content={children} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout; 