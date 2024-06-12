/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: { 
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

