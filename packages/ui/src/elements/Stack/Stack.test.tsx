import { render } from '@testing-library/react'
import { Stack, StackAlignment, StackDirection, StackSpacing } from './Stack'

it.each([
  ['flex-start' as StackAlignment, 'stack--flex-start'],
  ['space-between' as StackAlignment, 'stack--space-between'],
])('should render with class name `stack--%s`', (input, expected) => {
  const { getByText } = render(<Stack alignment={input}>Stack</Stack>)
  expect(getByText('Stack')).toHaveClass(expected)
})

it.each([
  ['column' as StackDirection, 'stack--column-none'],
  ['row' as StackDirection, 'stack--row-none'],
])('should render with class name `stack--%s`', (input, expected) => {
  const { getByText } = render(<Stack direction={input}>Stack</Stack>)
  expect(getByText('Stack')).toHaveClass(expected)
})

it.each([
  ['none' as StackSpacing, 'stack--column-none'],
  ['small' as StackSpacing, 'stack--column-small'],
  ['medium' as StackSpacing, 'stack--column-medium'],
  ['large' as StackSpacing, 'stack--column-large'],
])('should render with class name `stack--%s`', (input, expected) => {
  const { getByText } = render(<Stack spacing={input}>Stack</Stack>)
  expect(getByText('Stack')).toHaveClass(expected)
})
