import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageGrid from '../../components/blog/ImageGrid';
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
    excerpt?: string;
  };
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout>
        <BlogLayout>
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-pulse text-2xl">Loading...</div>
          </div>
        </BlogLayout>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} | Jason Li</title>
        <meta name="description" content={frontMatter.excerpt || ''} />
      </Head>

      <BlogLayout>
        <article className="blog-post">
          <MDXRemote {...source} components={components} />
        </article>
      </BlogLayout>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const slug = params?.slug;
    const post = await getBlogPostBySlug(slug);
    
    if (!post) {
      return { notFound: true };
    }

    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: post.frontMatter,
      },
      revalidate: 60, // Enable ISR - regenerate page after 60 seconds
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
} 