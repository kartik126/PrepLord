module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Avoid using the 'fs' module
      };
    }

    return config;
  },
};
