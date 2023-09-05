/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
        fallback: [{ source: '/api/:path*', destination: `${process.env.API_URL}/:path*` }],
    }
},
  
}

module.exports = nextConfig
