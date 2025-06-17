/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maximaticmedia.com',
      },
    ],
  },
};

export default nextConfig;
