import { fireEvent, render } from '@testing-library/react'
import { Button, ButtonColor, ButtonVariant } from './Button'

it('should render as expected', () => {
  const { getByRole } = render(<Button />)
  expect(getByRole('button')).toBeInTheDocument()
})

it.each([
  ['error' as ButtonColor, 'button button--error'],
  ['info' as ButtonColor, 'button button--info'],
  ['success' as ButtonColor, 'button button--success'],
  ['warn' as ButtonColor, 'button button--warn'],
])('should render with class name `button button--%s`', (input, expected) => {
  const { getByRole } = render(<Button color={input} />)
  expect(getByRole('button')).toHaveClass(expected)
})

it.each([
  ['ghost' as ButtonVariant, 'button button--ghost'],
  ['outline' as ButtonVariant, 'button button--outline'],
])('should render with class name `button button--%s`', (input, expected) => {
  const { getByRole } = render(<Button variant={input} />)
  expect(getByRole('button')).toHaveClass(expected)
})

it('should trigger on click event', () => {
  const onClick = jest.fn()
  const { getByRole } = render(<Button onClick={onClick} />)
  const button = getByRole('button')

  fireEvent.click(button)

  expect(onClick).toHaveBeenCalled()
})
