/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/discover/:path*',
        headers: [
          {
            key: 'accept',
            value: 'application/json',
          },
          {
            key: 'Authorization',
            value: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/discover/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/3/discover/:path*`,
      },
    ];
  },
};
export default nextConfig;
