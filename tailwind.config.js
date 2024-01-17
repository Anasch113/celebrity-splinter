/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        
        'bg-color' : 'rgb( 0,0,0 )',
        'offWhite' : 'hsl(216, 20%, 97%)',
      
        'gray-light': '#D9D9D9',
        "gray-dark": "#5F5F5F",
        'yellow-color': "#FCD307",
        'purple-color': "#6E2BE5"

        
        
        
      },

      textColor: {
       
        'text-gray-light': '#D9D9D9',
        'text-gray-nav': 'rgb(160, 160, 159)',
        "text-gray-dark": "#5F5F5F",
        'text-yellow-color': "#FCD307",
        'text-purple-color': "#6E2BE5",
        'text-white': "#ffffff",
        'text-gray-other': "#292929"

        
        
        
      },
      borderColor:{
        'border-purple-color': "#6E2BE5",
      },
     

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'caromant': ['Cormorant Garamond', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
      
        'lulo': ['lulo'],
        'proxima': ['proxima'],
      },
      // backgroundImage:{
      //   'hero-pattern': "url('../assets/cars-bg.svg')",
      // }
    },
  },
  plugins: [],
}


