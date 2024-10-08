/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        hoverDefault: 'polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%)',
        hoverActive: 'polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%)',
      },
      colors: {
        customBlue: '#8792eb',
        customBlack: '#000',
        customWhite: '#fff',
        primary: '#4e5e72',
        accent: '#c8e7d8',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
      transitionDuration: {
        '200': '0.2s',
      },
      height: {
        '1/10': '10%',
        '4/5': '80%',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
