import path from 'node:path';
import { Config } from 'tailwindcss';

const config: Config = {
  content: [path.join(__dirname, 'app', '**', '*.{js,ts,jsx,tsx}')],
  theme: {},
  plugins: [],
};

export default config;
