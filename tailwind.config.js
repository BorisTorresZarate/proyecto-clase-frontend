
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow-sombra': '0 0 25px #0ef',
      },

    },
  },
  plugins: [],
}
