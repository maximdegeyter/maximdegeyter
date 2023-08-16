/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Caprasimo']
      },
      colors: {
        'custom-purple': '#5533BF',
      },
    },
  },
  plugins: [],
}
