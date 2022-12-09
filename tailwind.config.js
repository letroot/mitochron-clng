/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mhblue: '#15157C',
        mhpink: '#ED1E79',
        mhgray: '#424242',
        mhindigo: '#8585FF'
      },
    },
  },
  plugins: [],
}