import { type Config } from 'tailwindcss'
import tailwindcss3d from 'tailwindcss-3d'
import exposeColors from '@tailwind-plugin/expose-colors'

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
      current: "currentColor",
      transparent: "transparent",
      offblack: "#838383",
      black: "#000000",
      white: "#FFFFFF",
      whiteRgba: 'rgb(255 255 255 / <alpha-value>)',
      yellow: "#EAFF01",
      green: "#ADF454",
      blue: "#51DBEA",
      purple: "#A58EF7",
      navy: "#1C1D2C",
      'navy-light': "#2A2B3A",
      'navy-lighter': "#3E3E4E",
      cream: "#F7F7F0",
      grey: "#BBBBBB",

      // TEMP NAMES
      card: "#28293A",
    },
    fontFamily: {
      heading: ["area-normal", "sans-serif"],
      body: ["Reddit Sans", "sans-serif"],
    },
    fontSize: {
      12: [`${pxToRem(12)}rem`, { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      13: [`${pxToRem(13)}rem`, { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      15: [`${pxToRem(15)}rem`, { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      16: [`${pxToRem(16)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      18: [`${pxToRem(18)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      20: [`${pxToRem(20)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      21: [`${pxToRem(21)}rem`, { lineHeight: '1.5', letterSpacing: '-0.02em' }],
      24: [`${pxToRem(24)}rem`, { lineHeight: '1.5', letterSpacing: '-0.04em' }],
      26: [`${pxToRem(26)}rem`, { lineHeight: '1.5', letterSpacing: '-0.04em' }],
      28: [`${pxToRem(28)}rem`, { lineHeight: '1.5', letterSpacing: '-0.04em' }],
      32: [`${pxToRem(32)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      34: [`${pxToRem(34)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      36: [`${pxToRem(36)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      40: [`${pxToRem(40)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      44: [`${pxToRem(44)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      48: [`${pxToRem(48)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      56: [`${pxToRem(56)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      64: [`${pxToRem(64)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      80: [`${pxToRem(80)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      100: [`${pxToRem(100)}rem`, { lineHeight: '1.2', letterSpacing: '-0.04em' }],
      'fluid-h1': [
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
      'fluid-h2': [
        `${
          clamp({
            minPixels: 44,
            minViewportWidthPixels: screenSizes.md,
            maxPixels: 80,
            maxViewportWidthPixels: screenSizes.base,
          })
        }`,
        {
          lineHeight: '1.2',
          letterSpacing: '-0.04em'
        },
      ],
      'fluid-h3': [
        `${
          clamp({
            minPixels: 40,
            minViewportWidthPixels: screenSizes.md,
            maxPixels: 64,
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
      inherit: 'inherit',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      15: '15px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
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
    transitionTimingFunction: {
      smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0.0, 1, 1)',
      out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      inExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
      outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      inOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
      inQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
      outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      inOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
      inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      outBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    extend: {
      borderRadius: {
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        30: '30px',
        40: '40px'
      },
      backdropBlur: {
        20: '20px',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1500: '1500ms',
      },
      transitionDelay: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1500: '1500ms',
      },
    },
  },
  plugins: [
    tailwindcss3d,
    exposeColors({
      extract: [
        'yellow',
        'green',
        'blue',
        'purple',
        'navy',
        'cream',
        'grey',
        'card'
      ],
      prefix: `--yellowball`,
      mode: 'hex'
    })
  ],
} satisfies Config;
