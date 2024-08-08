/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-bg' : '#46535b'
      },
      fontFamily: {
        sans: ['Space Grotesk']
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: false,
    base: false
  }
}

