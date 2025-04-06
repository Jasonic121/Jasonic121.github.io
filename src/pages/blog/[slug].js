import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { getBlogPosts, getBlogPostBySlug } from '../../utils/blog';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a className="inline-block bg-amber-400 text-black font-bold py-2 px-6 rounded hover:bg-amber-300">
              Return to Blog
            </a>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} | Jason Li's Blog</title>
        <meta name="description" content={post.excerpt} />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
      </Head>

      <article className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <a className="text-amber-400 hover:text-amber-300 mb-6 inline-block">&larr; Back to Blog</a>
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{post.title}</h1>
          
          <div className="text-gray-400 mb-8">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
          </div>
          
          {post.coverImage && (
            <div className="mb-10">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none prose-invert prose-headings:text-amber-400 prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getBlogPosts();
  
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  
  return {
    props: {
      post,
    },
  };
} 