/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'Arial Black', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        barricade: {
          black: '#0a0a0a',
          card: '#111111',
          border: '#1e1e1e',
          red: '#cc2200',
          'red-hover': '#e52600',
          'red-dim': '#7a1500',
          text: '#f0ede8',
          muted: '#777777',
          secondary: '#aaaaaa',
        },
      },
      letterSpacing: {
        widest: '0.3em',
        'ultra-wide': '0.5em',
      },
    },
  },
  plugins: [],
}
