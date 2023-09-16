/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        labelColor: '#aaa',
        inputColor: '#555',
        inputBorder: '#ddd',
        bodyBg: '#eee',
      }
    },
  },
  plugins: [],
}

