/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          10: '#e3fcec',
          50: '#7efcac',
          100: '#b3cb9c',
          200: '#759450',
          300: '#45996c',
          400: '#006b56',
          500: '#327d58',
          600: '#154228',
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

