/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      md: "360px",
      lg: "1000px",
    },
    extend: {
      colors: {
        // Using modern `rgb`
        loginBtn: "rgb(var(--login-btn)/10)",
        createBtn: "#42b72a",
      },
      fontFamily: {
        arial: ["Arial"],
      },
    },
  },
  plugins: [],
};
