/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.glb$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        publicPath: "/_next/static/images",
        outputPath: "static/images/",
      },
    });

    return config;
  }
}

module.exports = nextConfig
