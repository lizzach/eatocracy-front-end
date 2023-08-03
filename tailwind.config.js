const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      50: "#e3f2fd",
      100: "#bbdefb",
      900: "#0d47a1",
    },
    // extend: {},
  },
  plugins: [],
});

