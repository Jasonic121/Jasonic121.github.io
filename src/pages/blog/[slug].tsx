import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageGrid from '../../components/blog/ImageGrid';
import ImageGallery from '../../components/ui/ImageGallery';
import { Course } from '../../components/blog/Course';
import { Event } from '../../components/blog/Event';
import { Person } from '../../components/blog/Person';
import { ImageWithCaption } from '../../components/blog/ImageWithCaption';
import { getAllPosts, getBlogPostBySlug } from '../../utils/blog';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { incrementViewCount } from '../../utils/viewCounter';

// Define components that can be used in MDX
const components = {
  ImageGrid: (props: any) => <ImageGrid {...props} />,
  Course: (props: any) => <Course {...props} />,
  Event: (props: any) => <Event {...props} />,
  Person: (props: any) => <Person {...props} />,
  ImageWithCaption: (props: any) => <ImageWithCaption {...props} />,
};

interface BlogPostProps {
  source: any;
  frontMatter: {
    title: string;
    date: string;
    coverImage?: string;
    coverImages?: string[];
    excerpt?: string;
  };
}

// Enhanced loading component with beautiful animation
const LoadingShimmer = () => (
  <div className="space-y-8 p-8 animate-pulse">
    {/* Header shimmer */}
    <div className="space-y-4">
      <div className="h-12 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg w-3/4 animate-shimmer"></div>
      <div className="h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded w-1/3 animate-shimmer"></div>
    </div>
    
    {/* Content shimmer */}
    <div className="space-y-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="space-y-3">
          <div className={`h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer`} 
               style={{ width: `${Math.random() * 40 + 60}%` }}></div>
          <div className={`h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-shimmer`} 
               style={{ width: `${Math.random() * 30 + 70}%` }}></div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced error component
const ErrorFallback = ({ error }: { error: Error }) => (
  <Layout>
    <BlogLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
        <div className="relative">
          <div className="text-8xl animate-bounce">😕</div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-400 max-w-md text-lg">
            We encountered an error while loading this blog post. Don't worry, we're on it!
          </p>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Refresh Page</span>
            </span>
          </button>
          
          <Link href="/blog">
            <span className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 font-semibold cursor-pointer">
              Back to Blog
            </span>
          </Link>
        </div>
      </div>
    </BlogLayout>
  </Layout>
);

// Enhanced blog post metadata with better styling
const BlogPostMeta = ({ frontMatter }: { frontMatter: BlogPostProps['frontMatter'] }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setIsMounted(true);
    setFormattedDate(new Date(frontMatter.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }));
    return () => setIsMounted(false);
  }, [frontMatter.date]);

  const metaItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: isMounted ? formattedDate : frontMatter.date,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: '5 min read',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      text: 'CMU Journey',
      gradient: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <div className="flex flex-wrap items-center gap-6 text-sm mb-12">
      {metaItems.map((item, index) => (
        <div key={index} className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group`}>
          <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
            {item.icon}
          </div>
          <span className="font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

// Enhanced share buttons with better interactions
const ShareButtons = ({ title }: { title: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setIsMounted(true);
    setCurrentUrl(window.location.href);
    return () => setIsMounted(false);
  }, []);

  const shareButtons = [
    {
      name: 'Copy Link',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      onClick: async () => {
        if (!isMounted) return;
        try {
          await navigator.clipboard.writeText(currentUrl);
          // You could add a toast notification here
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
      },
      color: 'hover:bg-gray-600',
      gradient: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <div className="flex items-center space-x-4 py-8 border-t border-gray-700/50">
      <span className="text-sm text-gray-400 font-semibold">Share this post:</span>
      <div className="flex space-x-3">
        {shareButtons.map((button) => (
          <button
            key={button.name}
            onClick={button.onClick}
            className={`p-3 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:${button.gradient} text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
            aria-label={`Share on ${button.name}`}
          >
            <div className="transform group-hover:scale-110 transition-transform duration-200">
              {button.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Increment view count when mounted and slug is available
    if (router.query.slug && typeof router.query.slug === 'string') {
      incrementViewCount(router.query.slug).then(setViews);
    }
    return () => setIsMounted(false);
  }, [router.query.slug]);

  // If the page is not yet generated, show enhanced loading
  if (router.isFallback || !isMounted) {
    return (
      <Layout>
        <BlogLayout>
          <LoadingShimmer />
        </BlogLayout>
      </Layout>
    );
  }

  // Determine whether to show gallery or single image
  const hasCoverImages = frontMatter.coverImages && frontMatter.coverImages.length > 0;
  const coverImageToUse = hasCoverImages ? frontMatter.coverImages : (frontMatter.coverImage ? [frontMatter.coverImage] : []);

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} | Jason Li</title>
        <meta name="description" content={frontMatter.excerpt || ''} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.excerpt || ''} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.excerpt || ''} />
      </Head>

      <BlogLayout>
        <article className="blog-post relative">
          {/* Enhanced header */}
          <header className="mb-16">
            {/* Back to blog link with enhanced styling */}
            <div className="mb-8">
              <Link href="/blog">
                <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm font-medium cursor-pointer group">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 mr-3">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Back to Blog</span>
                </span>
              </Link>
            </div>
            
            {/* Enhanced title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {frontMatter.title}
            </h1>
            
            <BlogPostMeta frontMatter={frontMatter} />
            
            {/* Enhanced cover image or gallery */}
            {coverImageToUse.length > 0 && (
              <div className="hero-image relative mb-12">
                <div className="relative overflow-hidden rounded-2xl">
                  {hasCoverImages ? (
                    <ImageGallery 
                      images={frontMatter.coverImages}
                      className="w-full"
                    />
                  ) : (
                    <>
                      <img 
                        src={frontMatter.coverImage} 
                        alt={frontMatter.title}
                        className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </>
                  )}
                </div>
              </div>
            )}
          </header>

          {/* Enhanced MDX Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote {...source} components={components} />
          </div>

          {/* Enhanced footer */}
          <footer className="mt-20 pt-12 border-t border-gray-700/50">
            {/* View Counter */}
            <div className="mb-6 text-gray-400 text-sm flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{views !== null ? `${views} view${views === 1 ? '' : 's'}` : 'Loading views...'}</span>
            </div>
            <ShareButtons title={frontMatter.title} />
            
            {/* Enhanced author section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <img 
                  src="/assets/images/Profilepic_TeddyBear.jpeg"
                  alt="Jason Li"
                  className="w-20 h-20 rounded-full border-3 border-blue-400 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Jason Li</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    M.S. in Electrical and Computer Engineering at Carnegie Mellon University. 
                    Passionate about technology and building innovative solutions.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="/">
                      <span className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 cursor-pointer group">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">Learn more about me</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </BlogLayout>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = getAllPosts();
    const paths = posts.map((post) => ({
      params: { slug: post.slug }
    }));
    
    return { 
      paths, 
      fallback: 'blocking'
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    
    if (!slug) {
      return { notFound: true };
    }

    const post = await getBlogPostBySlug(slug);
    
    if (!post) {
      return { notFound: true };
    }

    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: post.frontMatter,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { 
      notFound: true,
      revalidate: 60
    };
  }
};