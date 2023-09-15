/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        dark200: "#282828",
        dark300: "#3f3f3f",
        dark400: "#575757",
      },
    },
  },
  plugins: [],
};
