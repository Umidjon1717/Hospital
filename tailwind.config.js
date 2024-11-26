/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 40px 50px 0px #E5E9F666',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(208.18deg, #6888C8 9.05%, #5A98F2 76.74%)',
      },
    },
  },
  plugins: [],
}