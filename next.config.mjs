/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'nodejs', // Ensures it's running on Node.js, not Edge runtime
  },
  output: 'export', // Keep this if you're deploying a static site
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
