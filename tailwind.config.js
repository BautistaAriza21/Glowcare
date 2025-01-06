/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkblue': "#232973",
        'pink': "#F9DCEC",
        'negro': "#242424"
      },

      fontFamily: {
        'Titulo': ['Playfair Display', 'serif'],
        'Subtitulo': ['Taviraj', 'sans-serif'],
        'Texto': ['Open Sans', 'sans-serif'],
      },

      fontSize: {
        'titulo': '40px',
        'subtitulo': '30px',
        'texto': '20px',
      },

      screens: {
        'sm': '360px',
        'md': '600px',
        'lg': '1200px',
        'xl': '1440px',
      },

      boxShadow: {
        'dark': '0px 8px 16px 0 rgba(0, 0, 0, 25%)',
      }
    },
  },
  plugins: [],
}

