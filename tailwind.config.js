/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primaryGradient': 'linear-gradient(90deg, #0B1307 100%, #030A01 100%)',
      },
      colors: {
        'primary': '#F7F7F7',
        'secondary' : '#f7d9bc',
        'third' : '#896635',
        'forItalic': '#b6884a',
        'bookText' : '#F4F4F4',
        'sidenav' : '#0B1307',
  

       
      },
      borderColor: {
        'button': '#f7d9bc', 
        'firstLine': '#e5ac5f',
        'secondLine': '#896635',
        'insideLine': '#372711',
        'bookLine' :'#252B25',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
