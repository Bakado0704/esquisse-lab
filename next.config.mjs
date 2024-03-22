/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/', // リダイレクト元のURL
        destination: '/home', // リダイレクト先のURL
        permanent: true, // 永続的なリダイレクトかのフラグ
      },
    ];
  },
};

export default nextConfig;
