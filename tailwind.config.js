module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          900: "#0b0c10",
          800: "#161b22",
          700: "#21262d"
        }
      }
    }
  },
  plugins: []
};
