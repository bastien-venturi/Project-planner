/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      },
    },
  },
  plugins: [],
};
