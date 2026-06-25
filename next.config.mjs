/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    '192.168.11.124',
    '192.168.110.49',
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;
