/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID
  }
}

module.exports = nextConfig
