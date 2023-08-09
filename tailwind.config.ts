import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
    colors: {
      'purple': '#6324C6',
      'grey': '#A7B0BE',
      colors: {
        'white': '#FFFFFF',
        'gray-dark2': '#4C5667',
        'black': '#000000'
      }
    },
  },
  plugins: [],
}
export default config
