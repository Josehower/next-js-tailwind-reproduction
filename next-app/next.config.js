/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    deviceSizes: [320, 640, 768, 1024, 1200],
  },
  typescript: {
    // Types are already checked in CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // Linting is already checked in CI
    ignoreDuringBuilds: true,
  },
  webpack: (
    /** @type {import('webpack').Configuration} */
    webpackConfig
  ) => {
    // Remove .js from import specifiers, because
    // webpack does not yet support TypeScript-style
    // module resolution
    // https://github.com/webpack/webpack/issues/13252#issuecomment-828587290
    /** @type {Exclude<typeof webpackConfig.resolve, undefined>} */ (
      webpackConfig.resolve
    ).extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    };

    return webpackConfig;
  },
};

export default config;
