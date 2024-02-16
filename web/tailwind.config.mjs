/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 1s ease-out',
        'slide-down-2s': 'slideDown 2s ease-out',
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '5px 5px #558abb',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
