import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  padding: '$4',
  borderRadius: '$2',
  cursor: 'pointer',
  background: '$gray1',
  border: 'none',
  color: '$gray12',
  transition: 'all 0.3s ease',

  '&:hover': {
    background: '$gray2'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px #5bbceb'
  }
})
