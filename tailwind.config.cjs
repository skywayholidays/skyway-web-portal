/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#24AB70",
        hovercolor:"#22C55E",
        secondary:'black/80',
        secondaryhover:'black',
        maincolor:'white',
        maincolorhover:'#f6fcf9',
      }
    },
  },
  plugins: [],
}