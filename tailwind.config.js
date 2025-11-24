/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nycd: ["NYCD", "Courier New"],
        anton: ["Anton", "sans-serif"]
      },
      colors: {
        main: "#fdff73"
      },
      animation: {
        marquee: "marquee 25s linear infinite",
       
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        
      }
    }
  },
  plugins: []
};
