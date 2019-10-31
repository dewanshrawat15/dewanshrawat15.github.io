module.exports = {
  staticFileGlobs: [
    'index.html',
    'offline.html',
    'manifest.json',
    'dist/**.js',
  ],
  navigateFallback: '/offline.html',
  navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
};
