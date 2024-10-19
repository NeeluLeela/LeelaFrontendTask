/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primarybackground)',
        primaryMuted:'var(--primarybackgroundMuted)',
        primaryText: 'var(--primaryText)',
        muted:'var(--muted)',

      },
      '.hide-scrollbar': {
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }
    },
  },
  plugins: [],
}

