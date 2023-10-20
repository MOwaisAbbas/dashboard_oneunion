/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cus-blue" : "#03336E",
        "cus-red" : "#DA1C00",
        "cus-gray" : "#eaeff6",
        "cus-lblue" : "#3F93FF",

      }
    },
  },
  plugins: [],
}