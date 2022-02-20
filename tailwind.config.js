module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          400: "#FFE419",
          850: "#482504",
          900: "#381C01",
        },
        secondary: {
          400: "#753aee",
        },
      },
    },
  },
  plugins: [],
};
