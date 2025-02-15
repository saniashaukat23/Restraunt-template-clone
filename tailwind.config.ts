/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure this matches your file structure
  theme: {
    extend: {
      fontSize: {
        "section-title": "3.438rem",
        "21xl": "24rem",
      },
      spacing: {
        "section-spacing": "16px",
      },
      letterSpacing: {
        "title-tight": "-0.02em",
      },
      cursor: "none",
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        schibsted: ["Schibsted Grotesk", "sans-serif"],
      },
      colors: {
        cusborder: "rgba(35, 35, 35, 0.1)",
        customGray: "#282725",
        customLightGray: "#8d8987",
        customRed: "#d51f0f",
        customDarkGray: "#383632",
        cusBg: "#d39121",
        VeryLightGray: "#f9f6f3",
        customMediumGray: "#8d8987",
        cusLightBg: "#f9f6f3",
      },
      margin: {
        container: "105px",
      },
      lineHeight: {
        "21xl": "21.875rem",
      },
      height: {
        "2lpx": "2px",
      },
      boxShadow: {
        cusSha: "2px 5px 20px rgba(0, 0, 0, .1)",
        "custom-blue": "0 10px 12px rgba(0, 0, 0, 0.1)", // Merged instead of duplicate
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out",
      },
      container: {
        center: true,
        padding: "15px",
      },
      textStyles: {
        sectionTitle: "text-[3.438rem] text-customDarkGray leading-[3.2rem]",
        redLabel: "text-customRed text-base font-schibsted uppercase font-bold",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".outline-text": {
          "-webkit-text-stroke": "1px #d39121",
          color: "transparent",
        },
      });
    },
  ],
};
