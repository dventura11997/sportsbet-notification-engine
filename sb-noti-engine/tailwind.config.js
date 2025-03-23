/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      screens: {
        large: '1300px',
        medium: '900px',
        small: '500px',
        extrasmall: '320',
      },
      colors: {
        'babyblue-200': '#C1C6FF',
        'blue-grey-100': '#868d96',
        'charcoal-300': '#484646',
        'charcoal-400': '#B3B1B8',
        'charcoal-500': '#393939',
        'charcoal-600': '#6e6e6e',
        'charcoal-700': '#4B4B4B',
        'charcoal-800': '#2f2f2f',
        'charcoal-900': '#212121',
        'charcoal-950': '#1E1D1D',
        'charcoal-975': '#272727',
        'Cobolt-300': '#C1C6FF',
        'Cobolt-400': '#4D71FF',
        'Cobolt-700': '#2404d8',
        'Emerald-300': '#67DA5A',
      },
      borderRadius: {
        rounded4xl: '28px',
        '5xl': '32px',
      },
      width: {
        searchBar: '46rem',
      },
      outline: {
        'custom-100': '1px solid',
      },
      fontSize: {
        medium: '1.25em',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        hop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        hop: 'hop 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
