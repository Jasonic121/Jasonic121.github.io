import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Analytics() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // This is a simple password check - in production, use proper authentication
  const authenticate = (e) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'admin123') {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password');
    }
  };

  // Redirect non-authenticated users to login page
  useEffect(() => {
    if (!isAuthenticated && typeof window !== 'undefined') {
      // Stay on the page but show login
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>Website Analytics | Admin</title>
        <meta name="description" content="Admin analytics dashboard" />
      </Head>

      <div className="min-h-screen bg-gray-100 p-8">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            <form onSubmit={authenticate}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="mb-4 text-red-500">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Website Analytics</h1>
            <p className="mb-4">
              This is a basic analytics dashboard. For more detailed analytics, please visit your
              Google Analytics dashboard directly.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <p className="mb-2">
                To see detailed analytics, visit your Google Analytics dashboard:
              </p>
              <a
                href="https://analytics.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Open Google Analytics
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Setup Instructions</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Create a Google Analytics account if you don&apos;t have one already at{" "}
                  <a
                    href="https://analytics.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    analytics.google.com
                  </a>
                </li>
                <li>Set up a new property for your website</li>
                <li>Get your Measurement ID from the GA admin panel</li>
                <li>
                  Replace the &quot;MEASUREMENT_ID&quot; in your website code with your actual
                  Measurement ID
                </li>
                <li>
                  After 24-48 hours, you should start seeing data in your Google Analytics dashboard
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 