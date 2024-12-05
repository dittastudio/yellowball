const colourText: Record<string, string> = {
  'current': 'text-current',
  'transparent': 'text-transparent',
  'black': 'text-black',
  'white': 'text-white',
  'yellow': 'text-yellow',
  'green': 'text-green',
  'blue': 'text-blue',
  'purple': 'text-purple',
  'navy': 'text-navy',
  'navy-light': 'text-navy-light',
  'navy-lighter': 'text-navy-lighter',
  'cream': 'text-cream',
  'grey': 'text-grey',

} as const

const colourBackground: Record<string, string> = {
  'current': 'bg-current',
  'transparent': 'bg-transparent',
  'black': 'bg-black',
  'white': 'bg-white',
  'yellow': 'bg-yellow',
  'green': 'bg-green',
  'blue': 'bg-blue',
  'purple': 'bg-purple',
  'navy': 'bg-navy',
  'navy-light': 'bg-navy-light',
  'navy-lighter': 'bg-navy-lighter',
  'cream': 'bg-cream',
  'grey': 'bg-grey',
} as const

const colourOutline: Record<string, string> = {
  'current': 'outline-current',
  'transparent': 'outline-transparent',
  'black': 'outline-black',
  'white': 'outline-white',
  'yellow': 'outline-yellow',
  'green': 'outline-green',
  'blue': 'outline-blue',
  'purple': 'outline-purple',
  'navy': 'outline-navy',
  'navy-light': 'outline-navy-light',
  'navy-lighter': 'outline-navy-lighter',
  'cream': 'outline-cream',
  'grey': 'outline-grey',
} as const

export { colourText, colourBackground, colourOutline }
