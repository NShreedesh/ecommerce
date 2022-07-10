/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        navbar: "10vh",
        bottom: "90vh",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
