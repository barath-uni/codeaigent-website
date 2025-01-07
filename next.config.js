/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2368',
      },
      {
        protocol: 'https',
        hostname: 'codeaigent.com',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
      }
    ],
  },
};

export default config;
