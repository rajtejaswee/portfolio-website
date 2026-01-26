/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', // <--- Add this just in case
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com", 
      },
      {
        protocol: "https",
        hostname: "pin.it",       
      },
    ],
  },
};

export default nextConfig;