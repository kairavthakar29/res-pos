/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['pos.achyut.live'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  }
}


const pwaConfig = {
  dest:"public",
  register: true,
  skipWaiting: true,
};



const withPWA = require('next-pwa')(pwaConfig);




module.exports = withPWA(nextConfig);

