import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import CommentWall from '../components/CommentWall';
import Link from 'next/link';
import { getAllPosts } from '../utils/blog';

export default function Home({ latestPost }) {
  return (
    <Layout>
      <Head>
        <title>Jason Li - Portfolio</title>
        <meta name="description" content="Personal portfolio website showcasing my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {latestPost && (
        <section className="container mx-auto px-4 my-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Latest Blog</h2>
            <Link href="/blog">
              <a className="text-amber-400 hover:text-amber-300 transition-colors">View all</a>
            </Link>
          </div>
          <Link href={`/blog/${latestPost.slug}`}>
            <a className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.01]">
              {Array.isArray(latestPost.coverImages) && latestPost.coverImages.length > 0 && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={latestPost.coverImages[0]}
                    alt={latestPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{latestPost.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {new Date(latestPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                  })}
                </p>
                {latestPost.excerpt && (
                  <p className="text-gray-300 line-clamp-2">{latestPost.excerpt}</p>
                )}
              </div>
            </a>
          </Link>
        </section>
      )}
      <div className="container mx-auto px-4">
        <CommentWall />
      </div>
      <About />
      <Projects />
    </Layout>
  );
} 

export async function getStaticProps() {
  const posts = getAllPosts();
  const latestPost = posts && posts.length > 0 ? posts[0] : null;
  return {
    props: {
      latestPost,
    },
  };
}