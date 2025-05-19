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
          'large-width': "460px",
          'card-width': "423px",
          'avis-width': "1000px",
        },
        height: {
          "content-height": "30rem",
          "responsive-height": "41rem",
          "long-height": "460px",
          "card-height": "565px",
          "form-height": "830px",
        },
        lineHeight: {
          "title-space": "9.8rem"
        },
        fontFamily: {
          "kiona": "Kiona",
          "cocon": "Cocon"
        },
        backgroundImage: {
          "bg-image": "url('src/images/background-landing.jpg');"
        },
        boxShadow: {
          "double-border": "0 0 0 5px #115462, inset 0 0 0 5px #C1A156"
        },
        outlineWidth: {
          "width": "10px"
        },
        inset: {
          "double-border": "0 0 0 8px #3966dd"
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity : "0" },
            '50%': { opacity : "1" }
          },
          fadeRight: {
            "0%": { opacity: "0", transform: "translateX(100%)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          fadeLeft: {
            "0%": { opacity: "0", transform: "translateX(-100%)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          fadeLeftClosed: {
            "0%": { opacity: "1", transform: "translateX(0%)" },
            "100%": { opacity: "0", transform: "translateX(-100%)" },
          },
          "infinite-scroll": {
            "0%": {transform: "translateX(0)"},
            "100%": {transform: "translateX(calc(-50% - 20px))"},
          }
        },
        animation: {
          fadeRight: "fadeRight 1s ease-out",
          fadeLeft: "fadeLeft 1s ease-out",
          fadeLeftClosed: "fadeLeftClosed 1s ease-out",
          "infinite-scroll": "infinite-scroll 3s linear infinite",
          blink: "blink 0.7s steps(1) infinite"
        },
      },
    },
    plugins: [],
  }