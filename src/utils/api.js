/**
 * Utility functions for API calls
 */

/**
 * Get the base URL for API calls based on environment
 * @returns {string} Base URL for API calls
 */
export const getApiBaseUrl = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Return the current domain's base URL
    return window.location.origin;
  }
  
  // Return a fallback for server-side rendering
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
};

/**
 * Build a complete API URL
 * @param {string} path - API endpoint path (e.g., '/api/comments')
 * @returns {string} Complete API URL
 */
export const getApiUrl = (path) => {
  const baseUrl = getApiBaseUrl();
  // Remove trailing slash from base URL if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Remove leading slash from path if it exists
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${normalizedBaseUrl}${normalizedPath}`;
};

/**
 * Fetch data from an API endpoint
 * @param {string} path - API endpoint path
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} Parsed JSON response
 */
export const fetchFromApi = async (path, options = {}) => {
  const url = getApiUrl(path);
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return response.json();
}; 