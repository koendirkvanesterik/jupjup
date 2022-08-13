import { render } from '@testing-library/react'
import { Card } from './Card'

it('should render as expected', () => {
  const { container } = render(<Card />)
  expect(container).toMatchSnapshot()
})
