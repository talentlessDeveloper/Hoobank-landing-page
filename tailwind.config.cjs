/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ss: "620px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      boxShadow: {
        "3xl": "var(--card-shadow)",
      },
      colors: {
        primary: "rgba(0, 4, 15, 1)",
        secondary: "rgba(0, 246, 255,1)",
        dimWhite: "#ffffffb3",
        dimBlue: "#09977c1a",
        blackGradient: "var(--black-gradient)",
        bgBlackStop1: "#fff",
        bgBlackStop2: "#6d6d6d",
        bgBlackStop3: "#11101d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
