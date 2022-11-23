/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "mainFont": ['Inter', 'Poppins']
    },
    extend: {
      backgroundImage: {
        "mainBg": "url('/src/assets/illistration_background.jpg')"
      },
      colors: {
        'message_background': '#474747',
        'person_background': '#C18E4A'
      }
    },
  },
  plugins: [],
}
