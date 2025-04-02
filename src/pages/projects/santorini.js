import Head from 'next/head';
import Link from 'next/link';

export default function Santorini() {
  return (
    <>
      <Head>
        <title>Web Board Game: Santorini - Jason Li</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <a href="/" className="back-button">
        <i className="fas fa-arrow-left"></i>
        Back to Projects
      </a>

      <header className="project-header">
        <h1>Web Board Game: Santorini</h1>
        <p className="date">June 2024</p>
        <div className="award-badges">
          <a href="https://github.com/Jasonic121/Santorini.git" target="_blank" rel="noopener noreferrer" className="award-badge github-badge">
            <i className="fab fa-github"></i>
            View on GitHub
          </a>
        </div>
      </header>

      <main className="project-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>A web-based implementation of the popular board game Santorini, featuring a modern architecture, robust testing, and automated deployment pipeline. The project demonstrates software engineering best practices and scalable design patterns.</p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Modular and extensible game design using object-oriented principles</li>
            <li>Comprehensive testing suite with 95% coverage</li>
            <li>Automated CI/CD pipeline</li>
            <li>Real-time multiplayer functionality</li>
            <li>Responsive web interface</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">Maven</span>
            <span className="tech-tag">JUnit</span>
            <span className="tech-tag">Jacoco</span>
            <span className="tech-tag">GitHub Actions</span>
            <span className="tech-tag">UML</span>
          </div>
        </section>

        <section className="project-section">
          <h2>Architecture</h2>
          <p>The project follows a clean architecture approach with:</p>
          <ul>
            <li>Domain-driven design principles</li>
            <li>Clear separation of concerns</li>
            <li>Low coupling and high cohesion</li>
            <li>Extensive use of design patterns</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <ul>
            <li>Agile development methodology</li>
            <li>Test-driven development (TDD)</li>
            <li>Continuous integration and deployment</li>
            <li>Regular code reviews and pair programming</li>
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
          background-image: url('/images/projects/santorini/santorini-project.jpg');
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
          background: rgba(255, 255, 255, 0.1);
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
      `}</style>
    </>
  );
} 