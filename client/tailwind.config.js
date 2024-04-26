/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite', // Name, duration, easing, iteration
      },
      keyframes: {
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      height: {
        'dynamic': 'calc(50vh + 1rem)', // Example of a custom height utility
      },
      fontFamily: {
        Raleway : ["Raleway", "sans-serif"],
        Grifter : ["Grifter"], // Ensure the correct format for font families
        Poppins:["Poppins", 'sans-serif'],
      },
    },
  },
  // Optionally enable plugins by uncommenting and installing necessary packages
  // plugins: [
  //   require('@tailwindcss/line-clamp'),
  // ],
}
