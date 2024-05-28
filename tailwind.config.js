
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        sky : " #EDF7FA",
        dark : " #21243D" ,
        peach : "#FF6464",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'hero-bg': "url(./components/assets/hero.png)",
        'footer' : "url(./components/assets/footer.png)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs:{'max' : "480px"},
      md:{'max' :"768px" } ,
      lg:{'max' : "1440px"},
      xl: {'max': "1700px"}
    },
  },
  plugins: [],
};