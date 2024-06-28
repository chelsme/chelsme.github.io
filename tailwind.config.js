/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPillBg: '#60B1AB',
        customPillText: '#ffffff',
      },
      spacing: {
        'pill-x': '0.75rem',
        'pill-y': '0.25rem',
      },
      borderRadius: {
        'pill': '9999px',
      },
      fontSize: {
        'pill': '0.875rem',
      },
    },
  },
  plugins: [],
}
