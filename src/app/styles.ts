import { css, keyframes } from '@/styles/stitches.config'

const logoSpin = keyframes({
  from: { WebkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)' },
  to: { WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }
})

export const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    height: '100%',

    gap: '$3',

    '& .read-the-docs': {
      color: '#888'
    },

    main: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '$3',

      p: {
        marginTop: '$2'
      }
    }
  }),

  logo: css({
    height: '14rem',

    '&:hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)'
    },

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${logoSpin} infinite 20s linear`
    }
  }),

  linksContainer: css({
    display: 'flex',
    gap: '$4'
  }),

  footer: css({
    marginTop: 'auto',
    marginBottom: '$4',

    code: {
      background: '$gray5',
      padding: '$2',
      borderRadius: '$2',
      margin: '0 4px'
    }
  })
}
