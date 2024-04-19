/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  images: {
    // path: process.env.NEXT_PUBLIC_URL,
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig

