/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-image-assets',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: '/.*',
        handler: 'NetworkFirst',
        options: { cacheName: 'default-cache' },
      },
    ],
  },
});
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
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = withSuperjson()(withPWA(nextConfig));
