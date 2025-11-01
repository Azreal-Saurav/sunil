import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bs-uploads.toptal.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'verpex.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'winzons.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2ms8rpfqc4h24.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
