/** @type {import('tailwindcss').Config} */
//import drak from "./img/OIP.png"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'men': "url(../src/img/OIP.png)",
        animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          }
        }                    
        
      }),

    },
  },
  plugins: [],
}

