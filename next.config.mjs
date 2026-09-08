/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  allowedDevOrigins: [
    '192.168.11.124',
    '192.168.110.49',
    'localhost',
    '127.0.0.1',
    '192.168.11.193',
    '192.168.110.184'
  ],
};

export default nextConfig;
