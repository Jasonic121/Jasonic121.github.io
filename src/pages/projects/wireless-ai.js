import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaStar, FaMicrophone, FaGithub, FaFileAlt } from 'react-icons/fa';

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
          <a href="https://doi.org/10.1145/3708468.3711885" target="_blank" rel="noopener noreferrer" className="award-badge paper-badge">
            <i className="fas fa-file-alt"></i>
            Read Paper
          </a>
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
          <div className="achievements-container">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="achievement-content">
                <h3>Published Research</h3>
                <p>Co-author of "Can we make FCC experts out of LLMs" accepted at HotMobile 2025 (ACM International Workshop on Mobile Computing Systems and Applications)</p>
                <a href="https://doi.org/10.1145/3708468.3711885" target="_blank" rel="noopener noreferrer" className="doi-link">DOI: 10.1145/3708468.3711885</a>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <div className="achievement-content">
                <h3>Conference Speaker</h3>
                <p>Selected as the conference presenter to showcase our research findings at HotMobile 2025</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="achievement-content">
                <h3>LLM Pipeline Design</h3>
                <p>Designed and implemented an innovative LLM pipeline utilizing in-context learning and RAG for wireless technology problem-solving</p>
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="achievement-content">
                <h3>Research Contributions</h3>
                <p>Conducted comprehensive research on state-of-the-art LLM techniques and their applications in wireless communications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
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
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.85) 100%);
          color: white;
          padding: 6rem 2rem 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
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
          filter: brightness(0.3);
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        .project-header:hover::before {
          transform: scale(1.15);
        }

        .project-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .project-header p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .project-header .date {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .back-button {
          position: fixed;
          top: 2rem;
          left: 2rem;
          background: rgba(255, 255, 255, 0.95);
          color: #1a1a1a;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 100;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.01em;
        }

        .back-button:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .project-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #e5e7eb;
        }

        .project-section {
          margin-bottom: 4rem;
        }

        .project-section h2 {
          color: #60a5fa;
          margin-bottom: 2rem;
          text-align: left;
          font-weight: 700;
          font-size: 2rem;
          letter-spacing: -0.01em;
        }

        .project-section p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #e5e7eb;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .project-section ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }

        .project-section ul li {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #e5e7eb;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .project-section ul li:before {
          content: "•";
          color: #60a5fa;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }

        .tech-tag {
          background: #1e40af;
          color: white;
          padding: 0.625rem 1.25rem;
          border-radius: 20px;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          background: #1e3a8a;
        }

        .award-badges {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2.5rem;
        }

        .award-badge {
          background: #fbbf24;
          color: #1a1a1a;
          padding: 1rem 2rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          margin: 0.5rem;
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: 0.01em;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .award-badge i {
          margin-right: 0.8rem;
          font-size: 1.3rem;
        }

        .presenter-badge {
          background: #3b82f6;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .github-badge {
          background: #1a1a1a;
          color: white;
          text-decoration: none;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .github-badge:hover {
          background: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .doi-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.01em;
        }

        .doi-link:hover {
          text-decoration: underline;
          color: #1e40af;
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

        /* Enhanced Key Achievements Section */
        .achievements-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Published Research Card */
        .achievement-card:nth-child(1) .achievement-icon {
          color: #60a5fa;
        }

        .achievement-card:nth-child(1) .achievement-content h3 {
          color: #93c5fd;
        }

        .achievement-card:nth-child(1) .achievement-content p {
          color: #bfdbfe;
        }

        .achievement-card:nth-child(1) .doi-link {
          color: #60a5fa;
        }

        /* Conference Speaker Card */
        .achievement-card:nth-child(2) .achievement-icon {
          color: #f472b6;
        }

        .achievement-card:nth-child(2) .achievement-content h3 {
          color: #f9a8d4;
        }

        .achievement-card:nth-child(2) .achievement-content p {
          color: #fbcfe8;
        }

        /* LLM Pipeline Card */
        .achievement-card:nth-child(3) .achievement-icon {
          color: #4ade80;
        }

        .achievement-card:nth-child(3) .achievement-content h3 {
          color: #86efac;
        }

        .achievement-card:nth-child(3) .achievement-content p {
          color: #bbf7d0;
        }

        /* Research Contributions Card */
        .achievement-card:nth-child(4) .achievement-icon {
          color: #fbbf24;
        }

        .achievement-card:nth-child(4) .achievement-content h3 {
          color: #fcd34d;
        }

        .achievement-card:nth-child(4) .achievement-content p {
          color: #fde68a;
        }

        .achievement-icon {
          margin-right: 1.5rem;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 48px;
          transition: all 0.3s ease;
        }

        .achievement-content h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .achievement-content p {
          line-height: 1.7;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 400;
        }

        .achievement-card:hover .achievement-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .project-header h1 {
            font-size: 2.5rem;
          }

          .project-header p {
            font-size: 1.1rem;
          }

          .project-section h2 {
            font-size: 1.75rem;
          }

          .award-badge {
            font-size: 1rem;
            padding: 0.875rem 1.75rem;
          }

          .achievement-content h3 {
            font-size: 1.25rem;
          }

          .achievement-content p {
            font-size: 1rem;
          }
        }

        .paper-badge {
          background: #059669;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .paper-badge:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
}