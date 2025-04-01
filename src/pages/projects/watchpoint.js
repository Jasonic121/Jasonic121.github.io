import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WatchPoint() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const video = document.getElementById('demoVideo');
    if (video) {
      video.addEventListener('loadeddata', function() {
        this.parentElement.classList.add('loaded');
        setLoadingProgress(100);
      });

      video.addEventListener('progress', function() {
        if (video.buffered.length > 0) {
          const progress = (video.buffered.end(video.buffered.length - 1) / video.duration) * 100;
          setLoadingProgress(Math.min(progress, 99));
        }
      });

      video.addEventListener('error', function(e) {
        setError('Failed to load video. Please try again later.');
        console.error('Video loading error:', e);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>WatchPoint - Jason Li</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <a href="/" className="back-button">
        <i className="fas fa-arrow-left"></i>
        Back to Projects
      </a>

      <header className="project-header">
        <h1>WatchPoint</h1>
        <p>Team Lead - CMU Hackathon</p>
        <p className="date">2024</p>
        <div className="award-badges">
          <div className="award-badge">
            <i className="fas fa-medal"></i>
            Bronze Medal - CMU Hackathon
          </div>
          <a href="https://github.com/Jasonic121/WatchPoint" target="_blank" rel="noopener noreferrer" className="award-badge github-badge">
            <i className="fab fa-github"></i>
            View on GitHub
          </a>
        </div>
      </header>

      <main className="project-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>WatchPoint is an innovative parental monitoring application that leverages AI technology to protect children from harmful digital content. The project was developed during the CMU Hackathon, where it earned the Bronze Medal for its innovative approach to digital safety.</p>
        </section>

        <section className="project-section">
          <h2>Demo Video</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/41QDwIIBG5A"
              title="WatchPoint Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Real-time monitoring of digital content using AI</li>
            <li>Advanced sentiment analysis for detecting harmful content</li>
            <li>Customizable privacy settings for different age groups</li>
            <li>Instant alert system for parents</li>
            <li>User-friendly dashboard for monitoring and configuration</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">AI/ML</span>
            <span className="tech-tag">Sentiment Analysis</span>
            <span className="tech-tag">Real-time Monitoring</span>
            <span className="tech-tag">Natural Language Processing</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Impact</h2>
          <p>WatchPoint addresses the growing concern of children's online safety by providing:</p>
          <ul>
            <li>Proactive protection against cyberbullying and harmful content</li>
            <li>Real-time monitoring without compromising privacy</li>
            <li>Customizable solutions for different age groups and family needs</li>
            <li>Easy-to-use interface for parents to ensure their children's digital safety</li>
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
          background-image: url('/images/projects/watchpoint/NOVA-award-pic.jpg');
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
          background: #2d3748;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .award-badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .award-badge {
          background: #cd7f32;
          color: white;
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
          border-radius: 8px;
          margin: 2rem 0;
          background: #000;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Video controls styling */
        video::-webkit-media-controls {
          background-color: rgba(0, 0, 0, 0.7);
        }

        video::-webkit-media-controls-panel {
          padding: 0 10px;
        }

        /* Loading state */
        .video-container::before {
          content: 'Loading video...';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          color: white;
          font-size: 1rem;
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .video-container::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
          margin-top: 2rem;
        }

        .loading-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 2;
        }

        .progress-bar {
          height: 100%;
          background: #007bff;
          transition: width 0.3s ease;
        }

        .progress-text {
          position: absolute;
          right: 10px;
          top: -20px;
          color: white;
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .video-error {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #000;
          color: white;
          text-align: center;
          padding: 1rem;
        }

        .video-error img {
          max-width: 100%;
          max-height: 80%;
          object-fit: contain;
          margin-bottom: 1rem;
        }

        .video-error p {
          color: #ff4444;
          font-size: 1rem;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .video-container.loaded::before,
        .video-container.loaded::after {
          display: none;
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