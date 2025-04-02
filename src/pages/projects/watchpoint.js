import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WatchPoint() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/#projects');
  };

  return (
    <>
      <Head>
        <title>WatchPoint - Jason Li</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <button onClick={handleBack} className="back-button">
        <div className="flex items-center gap-0.5">
          <i className="fas fa-arrow-left"></i>
          Back to Projects
        </div>
      </button>

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

        <section className="project-section">
          <h2>Photo Gallery</h2>
          <div className="photo-gallery">
            <div className="photo-item">
              <img 
                src="/images/projects/watchpoint/NOVA-award-pic.jpg" 
                alt="WatchPoint Team with NOVA Award" 
                className="gallery-image"
              />
              <div className="photo-caption">Team receiving the Bronze Medal</div>
            </div>
            <div className="photo-item">
              <img 
                src="/images/projects/watchpoint/GroupPhotoWhileHacking.JPG" 
                alt="Team working during hackathon" 
                className="gallery-image"
              />
              <div className="photo-caption">Team collaborating during the development phase</div>
            </div>
            <div className="photo-item">
              <img 
                src="/images/projects/watchpoint/Hackathon-opening.JPG" 
                alt="Hackathon opening ceremony" 
                className="gallery-image"
              />
              <div className="photo-caption">Opening ceremony of the CMU Hackathon</div>
            </div>
            <div className="photo-item">
              <img 
                src="/images/projects/watchpoint/LockingIn.jpg" 
                alt="Team focused on coding" 
                className="gallery-image"
              />
              <div className="photo-caption">Team locked in during intense coding session</div>
            </div>
          </div>
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
          background-image: url('/images/projects/watchpoint/NOVA-award-pic.jpg');
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
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .award-badges {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2.5rem;
        }

        .award-badge {
          background: rgba(205, 127, 50, 0.9);
          color: white;
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
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .award-badge i {
          margin-right: 0.8rem;
          font-size: 1.3rem;
        }

        .github-badge {
          background: rgba(26, 26, 26, 0.9);
          color: white;
          text-decoration: none;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .github-badge:hover {
          background: rgba(0, 0, 0, 0.95);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          margin: 2rem 0;
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        /* Video controls styling */
        video::-webkit-media-controls {
          background-color: rgba(0, 0, 0, 0.7);
        }

        video::-webkit-media-controls-panel {
          padding: 0 10px;
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
        }

        .photo-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .photo-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .photo-item:hover {
          transform: translateY(-5px);
        }

        .gallery-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .photo-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 0.5rem;
          font-size: 0.9rem;
          text-align: center;
          backdrop-filter: blur(4px);
        }
      `}</style>
    </>
  );
} 