/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./public/index.html", "./src//*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "1/10": "10%",
        "1/20": "5%",
      },
      colors: {
        // primary: "#00c3c7",
        primary: "#275EF9",
        secondary: "#00c3c7",
        secondaryShade: "#15faff",
        dark: "#ffcf22",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
