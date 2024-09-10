/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33658A",
        secondary: "#85BBD7",
        accent: "#F2641A",
        black:{
          light: "#6A6A6A",
          dark: "#494949"
        }
      },
      backgroundColor:{
        primary: "#33658A",
        secondary: "#85BBD7",
        accent: "#F2641A",
      },
      backgroundImage:{
        gradientOne: "linear-gradient(90deg, rgba(52,102,139,0.6) 0%, rgba(52,102,139,1) 20%, rgba(52,102,139,1) 50%, rgba(52,102,139,1) 80%, rgba(52,102,139,0.6) 100%)"

      },
      fontFamily:{
        saira: ['Saira Stencil One', 'systtem-ui'],
        opensans: ['Open Sans', 'systtem-ui']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
