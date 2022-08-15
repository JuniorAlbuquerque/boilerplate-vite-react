import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('should render App correctly', () => {
    const { container } = render(<App />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should counter value render with default value equal 0', () => {
    render(<App />)

    const button = screen.getByTestId(/button-increment/i)

    expect(button.textContent).toContain(0)
  })

  it('should increment counter', async () => {
    render(<App />)

    const button = screen.getByTestId(/button-increment/i)

    await userEvent.click(button)

    expect(button.textContent).toContain(1)
  })
})
