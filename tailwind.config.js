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
          100: "#EDE5FF",
          400: "#753aee",
          500: "#661FFC",
          700: "#460CBF",
          900: "#2B057B",
        },
      },
    },
  },
  plugins: [],
};
