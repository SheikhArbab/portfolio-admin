/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px"
      }, screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        primaryFont: "Roboto",
      },
      colors: {
        primaryBg: "#081b29",
        secBg: "#112e42",
        primaryPink: "#b721d1",
        secMain: "#00abf0",
        primaryText: "#ededed",
      },


      boxShadow: {
        textShadow: "0px 0px 32px 1px rgba(199,199,199,1)" 
      },
    },
  },
  plugins: [],
}


