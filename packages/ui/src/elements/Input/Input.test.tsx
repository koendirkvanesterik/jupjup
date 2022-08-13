import { render } from '@testing-library/react'
import { Input } from './Input'

it('should render as expected', () => {
  const { getByRole } = render(<Input />)
  expect(getByRole('textbox')).toBeInTheDocument()
})
