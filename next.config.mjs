/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '10.20.87.226',

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
