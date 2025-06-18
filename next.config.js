module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // Add any image domains you need
  },
  
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export
  images: {
    domains: ['lh3.googleusercontent.com'], // Allowed image domains
    unoptimized: true, // Required for static export
  },
  basePath: '/nextclass-demo', // For project sites (github.io/nextclass-demo)
  assetPrefix: '/nextclass-demo/', // Must match basePath
}

module.exports = nextConfig