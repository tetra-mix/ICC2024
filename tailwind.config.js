/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          0:   '#fafffa',
          100: '#CDEAA7',
          200: '#D0F2C4',
          300: '#CDE5B0',
          400: '#95B56C',
          500: '#A3B987',
          600: '#7A935A',
        },
        brown: {
          100: '#fceab3',
          200: '#fadbaf',
          300: '#fcd497',
          400: '#c1b389',
          500: '#6c4e21',
          600: '#9c835e',
        }
      }
    }
  },
};

