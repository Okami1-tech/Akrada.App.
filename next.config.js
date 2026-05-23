const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline',
  },
})
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['your-supabase-bucket.supabase.co'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = withPWA(nextConfig)