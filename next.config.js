const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];
    
    config.plugins = [
      ...config.plugins,
    ];
    
    return config;
  }
};

module.exports = withPlugins([withSass], nextConfig);
