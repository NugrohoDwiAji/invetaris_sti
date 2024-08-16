/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#179FB7",
        "secondary":"#162D3A",
        "fillInsert":"#F7FBFF",
        "outlineinsert":"#D4D7E3",
        "danger":"#ff0e0e"
      },
      fontFamily:{
        "sans":"Roboto"
      }
    },
  },
  plugins: [],
}

