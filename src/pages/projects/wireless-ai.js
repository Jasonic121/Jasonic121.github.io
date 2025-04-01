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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <a href="/" className="back-button">
        <i className="fas fa-arrow-left"></i>
        Back to Projects
      </a>

      <header className="project-header">
        <h1>Conversational AI for Wireless Networks</h1>
        <p>Research Assistant - Laboratory for Emerging Wireless Technologies (CMU)</p>
        <p className="date">Sept. 2024 - Present</p>
        <div className="award-badges">
          <div className="award-badge">
            <i className="fas fa-star"></i>
            Paper Accepted at HotMobile 2025
          </div>
          <div className="award-badge presenter-badge">
            <i className="fas fa-microphone"></i>
            Selected Conference Presenter
          </div>
          <a href="https://github.com/Jasonic121/WiLL.git" target="_blank" rel="noopener noreferrer" className="award-badge github-badge">
            <i className="fab fa-github"></i>
            View on GitHub
          </a>
        </div>
      </header>

      <main className="project-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>A cutting-edge research project focused on developing conversational AI systems capable of addressing complex wireless technology issues. The project combines state-of-the-art language models with domain-specific knowledge in wireless communications.</p>
        </section>

        <section className="project-section">
          <h2>Conference Presentation</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/EbPSfAWRtiw"
              title="Conference Presentation at HotMobile 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="project-section">
          <h2>Key Achievements</h2>
          <ul>
            <li>Co-author of "Can we make FCC experts out of LLMs" accepted at HotMobile 2025 (ACM International Workshop on Mobile Computing Systems and Applications)</li>
            <li>Selected as the conference presenter to showcase our research findings at HotMobile 2025</li>
            <li>Designed and implemented an innovative LLM pipeline utilizing in-context learning and RAG for wireless technology problem-solving</li>
            <li>Conducted comprehensive research on state-of-the-art LLM techniques and their applications in wireless communications</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">Large Language Models</span>
            <span className="tech-tag">RAG</span>
            <span className="tech-tag">Natural Language Processing</span>
            <span className="tech-tag">Wireless Communications</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Research Impact</h2>
          <p>This project represents a significant step forward in applying AI to wireless communications, potentially revolutionizing how we approach wireless network troubleshooting and optimization. The research has implications for:</p>
          <ul>
            <li>Automated wireless network troubleshooting</li>
            <li>Expert knowledge democratization in wireless communications</li>
            <li>Integration of AI in network management systems</li>
          </ul>
        </section>
      </main>

      <style jsx>{`
        .project-header {
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
          color: white;
          padding: 6rem 2rem 4rem;
          text-align: center;
          position: relative;
        }

        .project-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/images/projects/wireless-ai/ai-project.jpg');
          background-size: cover;
          background-position: center;
          z-index: -1;
          filter: brightness(0.5);
        }

        .back-button {
          position: fixed;
          top: 2rem;
          left: 2rem;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: white;
          transform: translateY(-2px);
        }

        .project-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .project-section {
          margin-bottom: 3rem;
        }

        .project-section h2 {
          color: #007bff;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .tech-tag {
          background: #f0f0f0;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .award-badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .award-badge {
          background: #ffd700;
          color: #333;
          padding: 1rem 2rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          margin: 0.5rem;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .award-badge i {
          margin-right: 0.8rem;
          font-size: 1.2rem;
        }

        .presenter-badge {
          background: #00a8ff;
          color: white;
        }

        .github-badge {
          background: #333;
          color: white;
          text-decoration: none;
        }

        .github-badge:hover {
          background: #000;
          transform: translateY(-2px);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          margin: 2rem 0;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .award-badges {
            flex-direction: column;
            align-items: center;
          }

          .award-badge {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
} 