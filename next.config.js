// @type {import('next').NextConfig}
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },

  assetPrefix: isProduction ? "https://demoinvoicing.vercel.app/" : "",
};

module.exports = nextConfig;
