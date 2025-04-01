import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaStar, FaMicrophone, FaGithub } from 'react-icons/fa';

export default function WirelessAIProject() {
  return (
    <>
      <Head>
        <title>Conversational AI for Wireless Networks - Jason Li</title>
        <meta name="description" content="A cutting-edge research project focused on developing conversational AI systems capable of addressing complex wireless technology issues." />
      </Head>

      <Link href="/#projects" className="fixed top-8 left-8 bg-background/90 text-white hover:bg-accent px-4 py-2 rounded flex items-center gap-2 z-50 transition-all hover:-translate-y-1">
        <FaArrowLeft />
        <span>Back to Projects</span>
      </Link>

      <header className="relative flex items-center justify-center py-32 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/images/projects/ai-project.jpg')" }}
          ></div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Conversational AI for Wireless Networks
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Research Assistant - Laboratory for Emerging Wireless Technologies (CMU)
          </motion.p>
          <motion.p
            className="text-lg opacity-80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sept. 2024 - Present
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-yellow-500 text-black px-6 py-3 rounded flex items-center gap-2 font-medium">
              <FaStar />
              <span>Paper Accepted at HotMobile 2025</span>
            </div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2 font-medium">
              <FaMicrophone />
              <span>Selected Conference Presenter</span>
            </div>
            <a 
              href="https://github.com/Jasonic121/WiLL.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded flex items-center gap-2 font-medium hover:bg-gray-900 transition-colors"
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Overview
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A cutting-edge research project focused on developing conversational AI systems capable of addressing complex wireless technology issues. The project combines state-of-the-art language models with domain-specific knowledge in wireless communications.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Key Achievements
          </motion.h2>
          <motion.ul 
            className="list-disc list-inside text-lg text-gray-300 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <li>Co-author of "Can we make FCC experts out of LLMs" accepted at HotMobile 2025 (ACM International Workshop on Mobile Computing Systems and Applications)</li>
            <li>Selected as the conference presenter to showcase our research findings at HotMobile 2025</li>
            <li>Designed and implemented an innovative LLM pipeline utilizing in-context learning and RAG for wireless technology problem-solving</li>
            <li>Conducted comprehensive research on state-of-the-art LLM techniques and their applications in wireless communications</li>
          </motion.ul>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies Used
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {["Python", "PyTorch", "Large Language Models", "RAG", "Natural Language Processing", "Wireless Communications"].map((tech, index) => (
              <span key={index} className="bg-background/50 border border-gray-700 rounded-full px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Research Impact
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            This project represents a significant step forward in applying AI to wireless communications, potentially revolutionizing how we approach wireless network troubleshooting and optimization. The research has implications for:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg text-gray-300 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <li>Automated wireless network troubleshooting</li>
            <li>Expert knowledge democratization in wireless communications</li>
            <li>Integration of AI in network management systems</li>
          </motion.ul>
        </section>
      </main>
    </>
  );
} 