import { render } from '@testing-library/react'
import { Container, ContainerSize } from './Container'

it.each([
  [undefined, 'container--medium'],
  ['small' as ContainerSize, 'container--small'],
  ['medium' as ContainerSize, 'container--medium'],
  ['large' as ContainerSize, 'container--large'],
])('should render with class name `container--%s`', (input, expected) => {
  const { getByText } = render(<Container size={input}>Container</Container>)
  expect(getByText('Container')).toHaveClass(expected)
})
