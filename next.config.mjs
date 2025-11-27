/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "i.ibb.co",
      "ibb.co",
"i.ibb.co.com"
    ],
  },
};


export default nextConfig;
