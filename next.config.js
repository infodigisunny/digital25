/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // CSS preload warning fix ke liye
  },
}

module.exports = nextConfig
