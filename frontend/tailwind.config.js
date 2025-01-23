/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        antiquewhite: "rgb(250,235, 215)",
        palevioletred: "rgb(216,112,147)",
        palevioletredhover: "rgb(220, 141, 167)",
        "palevioletred-light": "rgb(237, 186, 203)",
      },
    },
    plugins: [],
  },
};
