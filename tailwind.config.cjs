/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './*.html'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#1F1F2E',
      },
      screens: {
        'mdlg': '1210px',
      },
    },
  },
  plugins: [],
}
