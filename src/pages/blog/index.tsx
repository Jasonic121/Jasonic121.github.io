import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { getAllPosts } from '../../utils/blog';
import { GetStaticProps } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout>
      <Head>
        <title>Blog | Jason Li</title>
        <meta name="description" content="Jason Li's blog - Thoughts, tutorials, and insights" />
      </Head>
      
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Blog</h1>
        
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl mb-4">No posts yet</h2>
            <p className="text-gray-400">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <a className="group">
                  <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                    {post.coverImage && (
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-amber-400">{post.title}</h2>
                      <p className="text-gray-400 text-sm mb-4">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          timeZone: 'UTC'
                        })}
                      </p>
                      <p className="line-clamp-3 text-gray-300">{post.excerpt}</p>
                    </div>
                  </article>
                </a>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  
  return {
    props: {
      posts,
    },
  };
}; 