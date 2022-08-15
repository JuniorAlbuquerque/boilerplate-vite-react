import { FC, useState } from 'react'
import { globalStyles } from '../styles/global'
import { styles } from './styles'
import { TextSpan } from '@/components/Text'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'

const App: FC = () => {
  const [count, setCount] = useState(0)

  globalStyles()

  return (
    <div className={styles.wrapper()}>
      <main>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img
              src="/logo-boilerplate.svg"
              className={styles.logo()}
              alt="Vite logo"
            />
          </a>
        </div>

        <h1>
          Boilerplate <TextSpan variant="vite">Vite</TextSpan> +{' '}
          <TextSpan variant="react">React</TextSpan>
        </h1>

        <Button
          data-testid="button-increment"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <p>this project contains</p>
        <div className={styles.cardContainer()}>
          <Link href="https://stitches.dev/" target="_blank" rel="noreferrer">
            Stitches
          </Link>
          <Link href="https://eslint.org/" target="_blank" rel="noreferrer">
            Eslint
          </Link>
          <Link href="https://prettier.io/" target="_blank" rel="noreferrer">
            Prettier
          </Link>
          <Link href="https://vitest.dev/" target="_blank" rel="noreferrer">
            Vitest
          </Link>
        </div>
      </main>

      <footer className={styles.footer()}>
        <p>
          Edit <code>src/app/App.tsx</code> and save to test HMR
        </p>
      </footer>
    </div>
  )
}

export default App
