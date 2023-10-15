/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotify-black': '#0D1821',
        'spotify-pink': '#F5E6E8',
        'spotify-green': '#8DB38B',
        'spotify-purple': '#BC69AA',
        'spotify-blue': '#D2D6EF',
      }
    },
  },
  plugins: [],
}
