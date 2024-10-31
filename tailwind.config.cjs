/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_1: "#24AB70",
        green_2:"#22C55E",
        black_1:'#000',
        black_2:'#00000080',
        black_3:"#555555",
        white_1:'#fff',
        white_2:'#f6fcf9',
      }
    },
  },
  plugins: [],
}