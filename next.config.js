/** @type {import('next').NextConfig} */

const { withSuperjson } = require('next-superjson');
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  webpack: (config) => {
    config.cache = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = withSuperjson()(nextConfig);
