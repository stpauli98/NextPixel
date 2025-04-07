/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.REACT_APP_RESEND_API_KEY,
    NEXT_PUBLIC_RECIPIENT_EMAIL: process.env.REACT_APP_RECIPIENT_EMAIL,
  },
}

module.exports = nextConfig
