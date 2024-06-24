/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        trispace : '"Trispace", sans-serif;',
        natoSansKorean: '"Noto Sans KR", sans-serif;',
        poppins : '"Poppins", sans-serif;'
      },
      colors :{
        'myIndigo' :'#372b5e',
        'myOrange' : '#ff646c'
      }
    },
  },
  plugins: [],
}
