/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D4032",
        accent: "#E5C7C0",
        'bg-cream': "#FDFBF7",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
