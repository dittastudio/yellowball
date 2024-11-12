/** @type {import('tailwindcss').Config} */

const pxToRem = (px: number, base = 16): number | string => px / base

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      yellow: "#EAFF01",
      green: "#ADF454",
      blue: "#51DBEA",
      purple: "#A58EF7",
      navy: "#1C1D2C",
      cream: "#F7F7F0",
      grey: "#BBBBBB",
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: ["area-normal", "sans-serif"],
      body: ["Reddit Sans", "sans-serif"],
    },
    fontSize: {
      100: [`${pxToRem(100)}rem`, { lineHeight: '1.2' }],
      80: [`${pxToRem(80)}rem`, { lineHeight: '1.2' }],
      64: [`${pxToRem(64)}rem`, { lineHeight: '1.2' }],
      56: [`${pxToRem(56)}rem`, { lineHeight: '1.2' }],
      48: [`${pxToRem(48)}rem`, { lineHeight: '1.2' }],
      44: [`${pxToRem(44)}rem`, { lineHeight: '1.2' }],
      40: [`${pxToRem(40)}rem`, { lineHeight: '1.2' }],
      36: [`${pxToRem(36)}rem`, { lineHeight: '1.2' }],
      34: [`${pxToRem(34)}rem`, { lineHeight: '1.2' }],
      28: [`${pxToRem(28)}rem`, { lineHeight: '1.5' }],
      26: [`${pxToRem(26)}rem`, { lineHeight: '1.5' }],
      21: [`${pxToRem(21)}rem`, { lineHeight: '1.5' }],
      18: [`${pxToRem(18)}rem`, { lineHeight: '1.5' }],
      15: [`${pxToRem(15)}rem`, { lineHeight: '1.2' }],
      12: [`${pxToRem(12)}rem`, { lineHeight: '1.2' }],
    },
    letterSpacing: {
      2: `${pxToRem(2)}rem`,
      4: `${pxToRem(4)}rem`,
    },
    extend: {},
  },
  plugins: [],
};
