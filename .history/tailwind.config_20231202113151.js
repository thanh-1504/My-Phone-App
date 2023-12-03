/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mb: "320px",
      sm: "640px",
      screenMini: "768px"
      md: "820px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
