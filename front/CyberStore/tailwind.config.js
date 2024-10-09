/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '600': "37.5rem",
        '850': "53.125rem",
        '1140': "71.25rem"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base-orange': '#BA5809',
      'base-light-grey': '#C7C9C6',
      'base-grey': '#9FA194',
      'base-brown': '#443927',
      'base-dark': '#15100A',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'Playfair': '"Playfair"'
    }
    
  },
  plugins: [],
}

