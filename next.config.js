/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            jsx: true,
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // For static site export
  trailingSlash: true,
  // Add your domain if needed
  ...(process.env.NEXT_PHASE !== 'phase-export' && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
          ],
        },
      ];
    },
  }),
  // Used only in export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

module.exports = nextConfig 