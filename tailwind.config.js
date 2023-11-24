/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens:{


        'desktotab': {'max': '1100px'},
        'seconddesktotab': {'max': '1000px'},

        'tabtolargemob': {'max': '800px'},
        'largemobtomob' : {'max' : '550px'},
        'mobile' : {'max' : '420px'},

        
      },
      backgroundColor:{
        'primary' : '#0A0909'
      },

      lineHeight:{
        '12' : '56px'
      }
    },
  },
  plugins: [],
}

