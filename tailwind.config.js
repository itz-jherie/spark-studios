/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#0D0D0D",
      dark: "#1D2144",
      primary: "#4A6CF7",
      "primary-light": "#6583FF",
      "primary-dark": "#3B5AE0",
      yellow: "#FBB040",

      "surface": "#FFFFFF",
      "surface-2": "#F7F7F8",
      "surface-3": "#EFEFEF",
      "surface-4": "#E4E4E7",

      "ink": "#0D0D0D",
      "ink-2": "#3A3A42",
      "ink-3": "#6E6E78",
      "ink-4": "#A0A0AB",

      "border": "#E4E4E7",
      "border-2": "#D1D1D6",

      "body-color": "#6E6E78",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        display: ['"Inter"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        accent: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "btn-glow": "0 8px 32px rgba(74, 108, 247, 0.3)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.03)",
      },
      animation: {
        "slide-up": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
