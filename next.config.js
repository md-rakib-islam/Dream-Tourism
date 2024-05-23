/** @type {import('next').NextConfig} */

const prodConfig = {
  protocol: "https",
  hostname: "api.dreamtourism.it",
  port: "",
  pathname: "**/media/**",
};
const localConfig = {
  protocol: "http",
  hostname: "192.168.0.188",
  port: "8000",
  pathname: "**/media/**",
};
const imagedeliveryConfig = {
  protocol: "https",
  hostname: "imagedelivery.net",
  pathname: "/",
};

const nextConfig = {
  images: {
    domains: ["imagedelivery.net"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/italy",
        destination: "/destinations/italy",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/netherlands",
        destination: "/destinations/netherlands",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/switzerland",
        destination: "/destinations/switzerland",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/germany",
        destination: "/destinations/germany",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/belgium",
        destination: "/destinations/belgium",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
      {
        source: "/france",
        destination: "/destinations/france",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
