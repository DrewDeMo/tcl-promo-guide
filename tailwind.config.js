module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC5500',
        background: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
