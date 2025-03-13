/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFA5', // Teal/turquoise color
        secondary: '#008C79',
        dark: {
          100: '#2D2D2D',
          200: '#242424',
          300: '#1E1E1E',
          400: '#181818',
          500: '#121212',
        },
        light: {
          100: '#FFFFFF',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
    },
  },
  plugins: [],
} 