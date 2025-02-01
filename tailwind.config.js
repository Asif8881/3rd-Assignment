/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {  screens: {
      xs: "480px", // Custom smaller breakpoint
      sm: "540px", // Reduced 'sm' breakpoint
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
      extend: {},
    },
    plugins: [],
  }