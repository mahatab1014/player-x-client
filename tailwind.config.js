/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        heading: "'Rubik Dirt', cursive",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff0e1f",
          secondary: "#ffc311",
          accent: "#f3cc30",
          neutral: "#38373c",
          "base-100": "#17161a",
          info: "#53c0f3",
          success: "#71ead2",
          warning: "#f3cc30",
          error: "#e24056",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
