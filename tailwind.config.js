/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        iphoneXr: "414px",
        galaxy: "360px",
        iphone12: "390px",
        minitablets:"768px",
        dimension:"1024px"
      },
      backgroundColor: {
        footerbg: "#1b1c20"
      },
      colors: {
        footercolor: "#bbbbbb",
        footerhead: "#ffcc16"
        
      }
    },
  },
  plugins: [],
}

