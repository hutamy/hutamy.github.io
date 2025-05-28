/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Enables static HTML export
  assetPrefix: './',     // Makes sure assets are served relative to path
  trailingSlash: true,   // Ensures all URLs end with slash (important for GitHub Pages)
  images: {
    unoptimized: true,  // since Next.js image optimization is not supported in static export
  },
};

export default nextConfig;
