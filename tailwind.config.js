/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "c-white": "hsl(0, 0%, 100%)",
        "c-light-grayish-violet": "hsl(270, 3%, 87%)",
        "c-dark-grayish-violet": "hsl(279, 6%, 55%)",
        "c-very-dark-violet": "hsl(278, 68%, 11%)",
      },
      fontSize: {
        custom: "18px",
      },

      fontFamily: {
        main: "space-grotesk",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
