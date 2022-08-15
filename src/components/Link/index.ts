import { styled } from '@/styles/stitches.config'

export const Link = styled('a', {
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
  background: '$gray5',
  padding: '$3',
  borderRadius: '$3',

  color: '$gray12',
  cursor: 'pointer',

  fontSize: '$2'
})
