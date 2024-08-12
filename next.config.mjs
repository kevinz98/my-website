/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/my-app':'',
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;
