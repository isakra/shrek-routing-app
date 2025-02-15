/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shrekGreen: "#a4c639",
        shrekDarkGreen: "#67800d",
        shrekNavbar: "#95b71d",
      },
    },
  },
  plugins: [],
};
