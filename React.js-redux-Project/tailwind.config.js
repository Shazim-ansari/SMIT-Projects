/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitee:'#fcf9f8',
        brown: "#120e02",
        brown2:"#713d28",
        darkbrown:'#371406',
        gry:'#dbd5d2'
      },
      animation: {
        stripMove: 'stripMove 30s linear infinite', // Define the stripMove animation
      },
      keyframes: {
        stripMove: {
          '0%': {
            transform: 'translateX(0vw)', // Start at the initial position
          },
          '100%': {
            transform: 'translateX(100vw)', // End at the right side of the screen
          },
        },
      },
    },
  },
  plugins: [],
}

