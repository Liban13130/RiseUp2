/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
      extend: {
        colors: {
          "text-color": "#C1A156"
        },
        backgroundColor: {
          "background": "#115462",
        },
        width: {
          "link-width": "36rem"
        },
        height: {
          "content-height": "30rem"
        },
        fontFamily: {
          "kiona": "Kiona"
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