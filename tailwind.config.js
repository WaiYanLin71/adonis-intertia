/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    container:{
      center:true
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
