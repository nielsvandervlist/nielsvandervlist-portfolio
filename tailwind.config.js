/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
          'small': '10px'
      },
      colors: {
        'text': '#494949',
        'border': '#EDEDED',
        'light-text': '#6D6D6D',
        'purple': '#B605D7',
        'green': {
          100: '#E1FFF6',
          200: '#B0FCE9',
          400: '#76FFD8',
          600: '#26F7C3',
          800: '#069D78',

        },
        'lightgray': '#FAFAFA'
      },
      height: {
        'card-small': '26px',
        'card-medium': '33px',
        'card-large': '45px',
      },
      boxShadow: {
        '3xl': '0px 0px 12px 12px rgba(0,0,0,0.05)',
      },
      width: {
        'card': '250px',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(var(--card), 1fr))',
      },
      borderRadius: {
        'card': '16px',
      },
    },
  },
  plugins: [],
}
