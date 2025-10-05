import React from 'react';
import { useRouter } from 'next/router';
import TableOfContents from './TableOfContents';

const BlogLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Main content - centered with enhanced styling */}
            <article className="w-full lg:w-[calc(100%-20rem)] lg:ml-0 lg:mr-auto">
              <div className="relative">
                {/* Content wrapper with subtle border */}
                <div className="rounded-2xl border border-gray-700/50 overflow-hidden">
                  <div className="p-8 lg:p-12">
                    {children}
                  </div>
                </div>
              </div>
            </article>
            
            {/* Table of Contents sidebar */}
            <aside className="hidden lg:block w-80 relative">
              <div className="sticky top-24">
                <TableOfContents key={router.asPath} content={children} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;