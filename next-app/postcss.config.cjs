const path = require('node:path');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.ts'),
    },
    autoprefixer: {},
  },
};

module.exports = config;
