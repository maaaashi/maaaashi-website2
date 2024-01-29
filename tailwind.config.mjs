/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 1s ease-out',
        'slide-down-2s': 'slideDown 2s ease-out',
      },
    },
  },
  plugins: [require('daisyui')],
}
