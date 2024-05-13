/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cata: ['"Catamaran"', 'sans'],
        hamSmith: ['"Hammersmith One"', 'sans'],
      },
      backgroundImage: {
        'opening': "url('https://res.cloudinary.com/sandesh-06/image/upload/v1715528742/Comity/Untitled_design_wucghe.png')",
      },
    },
  },
  plugins: [],
}