/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./studio/schemas/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant Infant', serif", 'serif'],
        heebo: ["'Heebo', sans-serif", 'sans-serif'],
        hind: ["'Hind', sans-serif", 'sans-serif'],
      },
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        header: 'var(--header-color)',
        primary: 'var(--brand-color-primary)',
        secondary: 'var(--brand-color-secondary)',
        accent: 'var(--brand-color-accent)',
        overlay: 'rgba(129, 82, 194, 0.28)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
