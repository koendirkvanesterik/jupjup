import { render } from '@testing-library/react'
import { Card } from './Card'

it('should render as expected', () => {
  const { container, getByText } = render(<Card>Card</Card>)
  expect(container).toMatchSnapshot()
  expect(getByText('Card')).toHaveClass('card__body')
})

it('should render with title as expected', () => {
  const { container, getByText } = render(<Card title="Title" />)
  expect(container).toMatchSnapshot()
  expect(getByText('Title')).toHaveClass('card__title')
})

it('should render with actions as expected', () => {
  const { container, getByText } = render(<Card actions="Actions" />)
  expect(container).toMatchSnapshot()
  expect(getByText('Actions')).toHaveClass('card__actions')
})
