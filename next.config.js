module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // Add any image domains you need
  },
  
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static export
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig