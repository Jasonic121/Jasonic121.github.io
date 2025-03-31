module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f1624',
        'primary': '#FFFFFF',
        'accent': '#13ADC7',
        'accent-2': '#945DD6',
        'accent-3': '#F46737',
        'button': '#6b3afe',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 