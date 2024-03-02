/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'dynamic': 'calc(50vh + 1rem)', // Example of a custom height utility
      },
    },
    fontFamily: {
      // Higuen:"Higuen",
      // Norwester:'Norwester',
      // Rubik:['sans-serif'],
      // Tilt_Prism:['cursive'],
      // Outfit:['sans-serif'],
      Grifter : "Grifter",
      Poppins:["Poppins", 'sans-serif'],
    },
  },
  // plugins: [
  //   require('@tailwindcss/line-clamp'),
  // ],
}