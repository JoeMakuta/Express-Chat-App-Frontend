/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mainFont: ["Inter"],
    },
    extend: {
      backgroundImage: {
        mainBg: "url('/src/assets/illistration_background.jpg')",
        mainBg1: "url('/src/assets/r27.jpg')",
      },
      colors: {
        message_background: "#474747",
        person_background: "#C18E4A",
        main_color: "#00BDD6FF",
      },
    },
  },
  plugins: [],
};
