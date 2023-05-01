const withNextra = require('nextra')({
    theme: 'nextra-theme-blog',
    themeConfig: './theme.config.js',
    unoptimized: true,
  })
  
  
  module.exports = withNextra()