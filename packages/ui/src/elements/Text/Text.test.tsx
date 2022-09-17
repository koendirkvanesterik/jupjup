import { render } from '@testing-library/react'
import { Text, TextComponent, TextSize } from './Text'

it('should render as expected', () => {
  const { getByText } = render(<Text>Text</Text>)
  const text = getByText('Text')
  expect(text).toMatchSnapshot()
  expect(text).toHaveClass('text--medium')
})

it.each([
  ['h1' as TextComponent, 'heading'],
  ['h2' as TextComponent, 'heading'],
  ['h3' as TextComponent, 'heading'],
  ['h4' as TextComponent, 'heading'],
  ['h5' as TextComponent, 'heading'],
])('should render as `%s` element', (input, expected) => {
  const { getByRole } = render(<Text component={input} />)
  expect(getByRole(expected)).toBeInTheDocument()
})

it('should render as expected', () => {
  const { getByText } = render(<Text component="p">Text</Text>)
  const text = getByText('Text')
  expect(text).toMatchSnapshot()
})

it.each([
  ['small' as TextSize, 'text--small'],
  ['medium' as TextSize, 'text--medium'],
  ['large' as TextSize, 'text--large'],
])('should render with class name `text--%s`', (input, expected) => {
  const { getByRole } = render(<Text component="h1" size={input} />)
  expect(getByRole('heading')).toHaveClass(expected)
})
