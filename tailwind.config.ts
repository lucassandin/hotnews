import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
    colors: {
      light: {
        'purple': '#6324C6',
        'grey': '#A7B0BE',
        'background': '#f5f5f5',
        font: {
          'white': '#FFFFFF',
          'gray-dark2': '#4C5667',
          'black': '#000000'
        }
      },
      dark: {
        'purple': '#6324C6',
        'grey': '#A7B0BE',
        'background': '#323232',
        font: {
          'white': '#FFFFFF',
          'gray-dark2': '#4C5667',
          'black': '#000000',
          'purple': '#725fd5',
        }
      },
    },
  },
  plugins: [],
}
export default config
