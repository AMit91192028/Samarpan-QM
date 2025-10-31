/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      background:{
        'sheduling-image' :"url('./public/ALL-IMAGES/health-banner-bg.png')",
        'Tick':"url('./public/ALL-IMAGES/check-mark.png')",
        'cloud':"url('./public/ALL-IMAGES/blue-bg.webp')",
      }
    },
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui', ...],
    //   'serif': ['ui-serif', 'Georgia', ...],
    //   'mono': ['ui-monospace', 'SFMono-Regular', ...],
    //   'display': ['Oswald', ...],
    //   'body': ['"Open Sans"', ...],
    // },
  },
  plugins: [],
}