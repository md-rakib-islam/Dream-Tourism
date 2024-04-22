/** @type {import('next').NextConfig} */

const prodConfig = {
  protocol: "https",
  hostname: "api.dreamtourism.co.uk",
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
    domains: ["imagedelivery.net", "192.168.0.118"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  output: "standalone",
};

module.exports = nextConfig;
