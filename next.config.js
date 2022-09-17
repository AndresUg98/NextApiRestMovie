/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      "play-lh.googleusercontent.com",
      "static.filmin.es",
      "www.playstation.com",
      "www.api.themoviedb.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.api.themoviedb.org/3/",
      },
    ],
  },
};

module.exports = nextConfig;
