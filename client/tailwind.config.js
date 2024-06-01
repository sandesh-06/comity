const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cata: ['"Catamaran"', 'sans'],
        hamSmith: ['"Hammersmith One"', 'sans'],
        ubuntu: ['"Ubuntu"', 'sans-serif']
      },
      backgroundImage: {
        'opening': "url('https://res.cloudinary.com/sandesh-06/image/upload/v1715528742/Comity/Untitled_design_wucghe.png')",
      },
      aspectRatio:{
        '4/5':'4 / 5'
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}