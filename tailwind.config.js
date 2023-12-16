/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          blur:'url(../../public/foto.jpg)'
      },
      colors:{
          cor0: '#fff',
          cor1: '#FF8591',
          cor2:'#EFAAA3',
          cor3:'#8CAAA2',
          cor4:'#5A9B95',
          cor5:'#44878F',
          cor6:'#f4f6f9',
          cor7:'#ccc',
          cor8:"#343a40",
          corhoversideclick:"#007bff",
          corsidehover:"#6c757d",
          cor9:"#17a2b8",
          cor10:"007bff",
          cor11:"#28a745",
          cor12:"#ffc107"

      }
    },
  },
  plugins: [],
}
