/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        port: "",
        pathname: "/element_pic/**",
      },
    ],
  },
};

module.exports = nextConfig;
