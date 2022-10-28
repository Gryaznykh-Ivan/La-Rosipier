/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1040px',
      'xl': '1280px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {},
  },
  plugins: [],
}
