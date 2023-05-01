/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slidedown: {"0%": { transform: "translateY(-100%)" },"100%": { transform: "translateY(0%)" }, },
        faceIn: {from: { opacity: 0 }, to: { opacity: 1 }, }
      },
      animation: {
        slidedown: "slidedown .5s ease-in-out",
        faceIn: "faceIn .3s ease-in-out",
      },
    },
  },
  plugins: [],
}
