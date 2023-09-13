/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        Prism: ["Tilt Prism", "cursive"],
        Dance: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
}

