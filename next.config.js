/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://jamesloor02:Typescript02@cluster0.cnaun.mongodb.net/?retryWrites=true&w=majority"
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'i5.walmartimages.com']
  }
}

module.exports = nextConfig
