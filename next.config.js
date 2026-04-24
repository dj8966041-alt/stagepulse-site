/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `output: 'export'` — static export cannot run /api/* routes. Vercel (and `next start`) need a server
  // for `app/api/contact` + Resend. Pure static hosting (S3, GitHub Pages) would need a different contact solution.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
