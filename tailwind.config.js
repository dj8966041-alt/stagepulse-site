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
        // Editorial serif — feature headlines, wordmark
        display: ['var(--font-fraunces)', 'Georgia', 'Times New Roman', 'serif'],
        // Workhorse sans — body, nav, UI
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        // Condensed display — accent moments, eyebrow numerals
        condensed: ['var(--font-bebas)', 'Impact', 'Arial Narrow', 'sans-serif'],
      },
      colors: {
        sp: {
          // Neutrals
          black: '#0a0a0a',
          card: '#1a1a1a',
          elevated: '#2a2a2a',
          border: '#262626',
          'border-soft': '#1f1f1f',
          // Text
          text: '#ffffff',
          'text-2': '#f5f5f5',
          soft: '#b8b8b8',
          muted: '#8a8a8a',
          subtle: '#5a5a5a',
          // Accents — burnt orange
          accent: '#e8651a',
          'accent-hover': '#f4823b',
          'accent-dark': '#c4500f',
          'accent-dim': '#8a3a0c',
        },
      },
      letterSpacing: {
        widest: '0.3em',
        'ultra-wide': '0.5em',
      },
      maxWidth: {
        prose: '680px',
        feature: '1400px',
      },
    },
  },
  plugins: [],
}
