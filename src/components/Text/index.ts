import { styled } from '@/styles/stitches.config'

export const TextSpan = styled('span', {
  variants: {
    variant: {
      vite: {
        color: '$yellow500'
      },
      react: {
        color: '$blue500'
      }
    }
  }
})
