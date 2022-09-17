import { render } from '@testing-library/react'
import { FormControl } from './FormControl'

it('should render as expected', () => {
  const { container, getByText } = render(
    <FormControl>FormControl</FormControl>,
  )
  expect(container).toMatchSnapshot()
  expect(getByText('FormControl')).toHaveClass('form-control')
})

it('should render with label as expected', () => {
  const { container, getByText } = render(<FormControl label="Label" />)
  expect(container).toMatchSnapshot()
  expect(getByText('Label')).toHaveClass('form-control__label')
})

it('should render with hint as expected', () => {
  const { container, getByText } = render(<FormControl hint="Hint" />)
  expect(container).toMatchSnapshot()
  expect(getByText('Hint')).toHaveClass('form-control__hint')
})

it('should render with error hint as expected', () => {
  const { container, getByText } = render(<FormControl isError hint="Error" />)
  expect(container).toMatchSnapshot()
  expect(getByText('Error')).toHaveClass('form-control__hint--error')
})
