/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: "#EAFF01",
        green: "#ADF454",
        blue: "#51DBEA",
        purple: "#A58EF7",
        navy: "#1C1D2C",
        cream: "#F7F7F0",
        grey: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
