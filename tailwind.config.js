/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        "main-bg": "#151515",
        "nav-bg": "#000000",
        "main-text": "#E4E6F2",
      },
    },

    backgroundImage: {
      hero: "url('/src/assets/hero.png')",
      "bg-text ":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
    },
  },
  plugins: [],
};
