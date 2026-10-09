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
    '192.168.11.200',

  ],
  async headers() {
    return [
      { source: '/llms.txt', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }] },
      { source: '/llms-full.txt', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }] },
      { source: '/:path*.md', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }] },
    ]
  },
};

export default nextConfig;
