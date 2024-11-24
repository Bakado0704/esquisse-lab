/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-font-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-image-assets',
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\/_next\/image\?url=.+$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'next-image',
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
    ],
    exclude: [
      /\.(?:js)$/i,
      /\.(?:css|less)$/i,
      /\/_next\/data\/.+\/.+\.json$/i,
      /\.(?:json|xml|csv)$/i,
      /\.(?:mp3|wav|ogg)$/i,
      /\.(?:mp4|webm)$/i,
    ],
  },
});
const { withSuperjson } = require('next-superjson');
const WebpackObfuscator = require('webpack-obfuscator');
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  webpack: (config, { isServer, dev }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer && !dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: [
          {
            loader: WebpackObfuscator.loader,
            options: {
              compact: true,
              rotateStringArray: true,
              stringArray: true,
              stringArrayThreshold: 0.75,
            },
          },
        ],
      });
    }
    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = withSuperjson()(withPWA(nextConfig));
