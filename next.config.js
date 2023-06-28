/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "full-stack-ecommerce-clothing-web.vercel.app"],
  },
  typescript:{
    ignoreBuildErrors: true,
  }
 
};

module.exports = nextConfig;
