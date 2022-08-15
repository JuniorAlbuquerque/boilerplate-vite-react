import { createStitches } from '@stitches/react'
import { grayDark } from './theme/grayDark'

export const { styled, css, globalCss, createTheme, keyframes } =
  createStitches({
    theme: {
      colors: {
        blue500: '#5bbceb',
        yellow500: '#fdc723',

        background: '#242424',
        white: '#fff',

        ...grayDark
      },
      space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px'
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
        4: '18px'
      },
      radii: {
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem'
      },
      fonts: {
        default: 'sans-serif'
      }
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1366px)'
    }
  })
