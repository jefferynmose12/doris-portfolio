/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['Baskervville', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "black-text": "rgba(0, 0, 0, 1)",
        "dark-orange": "rgba(199, 105, 17, 1)",
        "fade-grey": "rgba(136, 136, 136, 1)",
        "medium-grey": "rgba(71, 71, 71, 1)",
        "light-grey-border": "rgba(227, 227, 227, 1)",
      },
    },
  },
  plugins: [],
};
