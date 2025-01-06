import { nextui } from '@nextui-org/react'; 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

