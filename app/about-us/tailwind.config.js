/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        keyframes: {
          slideInLeft: {
            from: {
              opacity: '0',
              transform: 'translateX(-100px)',
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          slideInRight: {
            from: {
              opacity: '0',
              transform: 'translateX(100px)',
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          fadeInTop: {
            from: {
              opacity: '0',
              transform: 'translateY(-50px)',
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          fadeInBottom: {
            from: {
              opacity: '0',
              transform: 'translateY(50px)',
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          bounceIn: {
            '0%': {
              opacity: '0',
              transform: 'scale(0.3)',
            },
            '50%': {
              opacity: '1',
              transform: 'scale(1.05)',
            },
            '70%': {
              transform: 'scale(0.9)',
            },
            '100%': {
              opacity: '1',
              transform: 'scale(1)',
            },
          },
        },
        animation: {
          'slide-in-left': 'slideInLeft 1s ease-out',
          'slide-in-right': 'slideInRight 1s ease-out 0.2s both',
          'slide-in-right-delayed': 'slideInRight 1s ease-out 0.6s both',
          'fade-in-top': 'fadeInTop 1s ease-out 0.1s both',
          'fade-in-bottom': 'fadeInBottom 1s ease-out 0.4s both',
          'bounce-in': 'bounceIn 1s ease-out 0.8s both',
        },
      },
    },
    plugins: [],
  }