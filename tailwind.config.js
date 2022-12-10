/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.75rem'
      },
      colors: {
        mycolor: {
          DEFAULT: '#444791'
        },
        colorsvg: {
          DEFAULT: '#5b5fc7'
        },
      },
      boxShadow: {
        'inset2x': 'inset -2px 0 7px 0 rgba(0,0,0,0.05)'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}
