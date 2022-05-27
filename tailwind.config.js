const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");


module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      
      fontFamily: {
        pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
        oregano: ["'Oregano', cursive"],
        fuzzyBubbles: ["'Fuzzy Bubbles', cursive"],
        oswold: ["'Oswold',sans-serif"]
        
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: "#568c75", 
        secondary: "#eff0df",
        'brand-purple': 'var(--clr-purple)',
        'brand-pink': 'var(--clr-pink)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'brand-background': 'var(--clr-background)'
      },
    },
     animation: {
      'pulse-slow': 'pulse 10s linear infinite'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
