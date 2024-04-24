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
    domains: ["imagedelivery.net", "api.dreamtourism.it"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  output: "standalone",
};

module.exports = nextConfig;
