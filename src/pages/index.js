import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jason Li - Portfolio</title>
        <meta name="description" content="Personal portfolio website showcasing my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Projects />
    </Layout>
  );
} 