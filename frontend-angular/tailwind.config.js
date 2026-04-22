module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#137fec',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'text-light-primary': '#343A40',
        'text-light-secondary': '#6C757D',
        'text-dark-primary': '#EDEDEC',
        'text-dark-secondary': '#9CA3AF',
        'border-light': '#E5E7EB',
        'border-dark': '#374151',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
