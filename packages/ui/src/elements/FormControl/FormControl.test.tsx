import { render } from '@testing-library/react'
import { FormControl } from './FormControl'

it('should render as expected', () => {
  const { container } = render(<FormControl />)
  expect(container).toMatchSnapshot()
})
