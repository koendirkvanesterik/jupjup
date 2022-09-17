import { fireEvent, render } from '@testing-library/react'
import { Button, ButtonColor, ButtonVariant } from './Button'

it('should render as expected', () => {
  const { getByRole } = render(<Button />)
  expect(getByRole('button')).toBeInTheDocument()
})

it.each([
  ['error' as ButtonColor, 'button--error'],
  ['info' as ButtonColor, 'button--info'],
  ['success' as ButtonColor, 'button--success'],
  ['warn' as ButtonColor, 'button--warn'],
])('should render with class name `button--%s`', (input, expected) => {
  const { getByRole } = render(<Button color={input} />)
  expect(getByRole('button')).toHaveClass(expected)
})

it.each([
  ['ghost' as ButtonVariant, 'button--ghost'],
  ['outline' as ButtonVariant, 'button--outline'],
])('should render with class name `button--%s`', (input, expected) => {
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
