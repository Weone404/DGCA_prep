/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2BC48A',
          dark: '#1FA374',
          light: '#E7F9F1',
        },
        ink: '#1B2430',
        muted: '#8C95A3',
        line: '#EDF0F4',
        canvas: '#F6F8FB',
        violet: '#7B7FF2',
        coral: '#FF8B6B',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 24px rgba(27, 36, 48, 0.06)',
      },
      borderRadius: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
}
