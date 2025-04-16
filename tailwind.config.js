/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          "color-gold": "#C1A156",
          "color-blue": "#115462",
        },
        backgroundColor: {
          "background": "#115462",
        },
        width: {
          "link-width": "36rem",
          'large-width': "460px"
        },
        height: {
          "content-height": "30rem",
          "responsive-height": "41rem",
          "long-height": "460px"
        },
        fontFamily: {
          "kiona": "Kiona"
        },
        backgroundImage: {
          "bg-image": "url('src/images/background-landing.jpg');"
        },
        keyframes: {
          fadeRight: {
            "0%": { opacity: "0", transform: "translateX(100%)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          fadeLeft: {
            "0%": { opacity: "0", transform: "translateX(-100%)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          "infinite-scroll": {
            "0%": {transform: "translateX(0)"},
            "100%": {transform: "translateX(calc(-50% - 20px))"},
          }
        },
        animation: {
          fadeRight: "fadeRight 1s ease-out",
          fadeLeft: "fadeLeft 1s ease-out",
          "infinite-scroll": "infinite-scroll 3s linear infinite"
        },
      },
    },
    plugins: [],
  }