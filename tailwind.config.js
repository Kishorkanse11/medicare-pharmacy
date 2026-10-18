/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] }, colors: { pine: { 50: '#edf7f4', 100: '#d9eee8', 200: '#b5ded4', 300: '#83c6b7', 400: '#4ba797', 500: '#288778', 600: '#1d6b60', 700: '#19564f', 800: '#164640', 900: '#123d3a' } }, boxShadow: { soft: '0 8px 30px rgba(20, 55, 50, .06)', card: '0 2px 8px rgba(20, 55, 50, .04)' } } },
  plugins: []
}
