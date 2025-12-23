/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/digital-marketing/",
        destination: "/digital-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
