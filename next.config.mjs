/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/my-app' : '',
};

export default nextConfig;
