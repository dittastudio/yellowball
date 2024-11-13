import { type Config } from 'tailwindcss'

const pxToRem = (px: number, base = 16): number => px / base

interface ClampOptions {
  minPixels: number
  minViewportWidthPixels: number
  maxPixels: number
  maxViewportWidthPixels: number
}

const clamp = ({
  minPixels,
  minViewportWidthPixels,
  maxPixels,
  maxViewportWidthPixels,
}: ClampOptions) => {
  const minValueRems = pxToRem(minPixels)
  const maxValueRems = pxToRem(maxPixels)
  const minViewportWidthRems = pxToRem(minViewportWidthPixels)
  const maxViewportWidthRems = pxToRem(maxViewportWidthPixels)

  const slope =
    (maxValueRems - minValueRems) /
    (maxViewportWidthRems - minViewportWidthRems)

  const intercept = minValueRems - slope * minViewportWidthRems

  return `clamp(${minValueRems}rem, ${intercept}rem + ${
    slope * 100
  }vw, ${maxValueRems}rem)`
}

export const screenSizes = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
  base: 1440,
  '2xl': 1536,
  '3xl': 2000,
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      yellow: "#EAFF01",
      green: "#ADF454",
      blue: "#51DBEA",
      purple: "#A58EF7",
      navy: "#1C1D2C",
      cream: "#F7F7F0",
      grey: "#BBBBBB",
    },
    fontFamily: {
      heading: ["area-normal", "sans-serif"],
      body: ["Reddit Sans", "sans-serif"],
    },
    fontSize: {
      12: [`${pxToRem(12)}rem`, { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      15: [`${pxToRem(15)}rem`, { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      16: [`${pxToRem(16)}rem`, { lineHeight: '1.5', letterSpacing: '0em' }],
      18: [`${pxToRem(18)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      21: [`${pxToRem(21)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      26: [`${pxToRem(26)}rem`, { lineHeight: '1.5', letterSpacing: '-0.04em' }],
      28: [`${pxToRem(28)}rem`, { lineHeight: '1.5', letterSpacing: '-0.04em' }],
      34: [`${pxToRem(34)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      36: [`${pxToRem(36)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      40: [`${pxToRem(40)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      44: [`${pxToRem(44)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      48: [`${pxToRem(48)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      56: [`${pxToRem(56)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      64: [`${pxToRem(64)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      80: [`${pxToRem(80)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      100: [`${pxToRem(100)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      'fluid-heading': [
        `${
          clamp({
            minPixels: 56,
            minViewportWidthPixels: screenSizes.xs,
            maxPixels: 100,
            maxViewportWidthPixels: screenSizes.base,
          })
        }`,
        {
          lineHeight: '1.2',
          letterSpacing: '-0.04em'
        },
      ],
    },
    letterSpacing: {
      'tight': '-0.02em',
      'tighter': '-0.04em',
    },
    screens: {
      xs: `${screenSizes.xs}px`,
      xsMax: { max: `${screenSizes.xs - 1}px` },
      sm: `${screenSizes.sm}px`,
      smMax: { max: `${screenSizes.sm - 1}px` },
      md: `${screenSizes.md}px`,
      mdMax: { max: `${screenSizes.md - 1}px` },
      lg: `${screenSizes.lg}px`,
      lgMax: { max: `${screenSizes.lg - 1}px` },
      xl: `${screenSizes.xl}px`,
      xlMax: { max: `${screenSizes.xl - 1}px` },
      base: `${screenSizes.base}px`,
      baseMax: { max: `${screenSizes.base - 1}px` },
      '2xl': `${screenSizes['2xl']}px`,
      '2xlMax': { max: `${screenSizes['2xl'] - 1}px` },
      '3xl': `${screenSizes['3xl']}px`,
      '3xlMax': { max: `${screenSizes['3xl'] - 1}px` },
    },
    spacing: {
      0: '0',
      5: '5px',
      10: '10px',
      12: '12px',
      20: '20px',
      24: '24px',
      30: '30px',
      40: '40px',
      50: '50px',
      60: '60px',
      70: '70px',
      80: '80px',
      90: '90px',
      100: '100px',
      110: '110px',
      120: '120px',
      160: '160px',
      200: '200px',
      240: '240px',
    },
    extend: {
      borderRadius: {
        md: '8px',
        lg: '20px',
        xl: '30px',
      },
    },
  },
  plugins: [],
} satisfies Config;
