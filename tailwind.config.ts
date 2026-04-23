import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0864AF',
          dark: '#064A85',
        },
        secondary: {
          DEFAULT: '#FFD700',
          dark: '#CCAC00',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
