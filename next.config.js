const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: false,
  trailingSlash: false,
  distDir: '/build',
  i18n: {
    locales: ['en', 'fr', 'de', 'es', 'nl'],
    defaultLocale: 'en',
  },
  images: {
    loader: 'custom',
    path: '/',
    domains: ['localhost://4000', 'placedog.net', 'cdn0.tnwcdn.com', 'nitrocraft-nextfrontend.vercel.app', 'cities.tnwcdn.com'],
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/posts': { page: '/posts'}
        }
    },
});


