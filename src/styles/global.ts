import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased'
  },
  html: {
    fontSize: '58.5%',
    background: '$background'
  },
  'body, button, input, textarea': {
    fontFamily: '$default',
    fontSize: '$3'
  },
  body: {
    height: '100vh',
    color: '$white'
  },
  '#root': {
    height: '100%',
    width: '100%'
  }
})
