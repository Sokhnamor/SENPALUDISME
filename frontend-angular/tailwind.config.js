/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "card-light": "#ffffff",
        "card-dark": "#1a2632",
        "text-light-primary": "#111418",
        "text-dark-primary": "#f1f3f5",
        "text-light-secondary": "#617589",
        "text-dark-secondary": "#a0b3c6",
        "border-light": "#e3e8ee",
        "border-dark": "#2c3d4e",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

