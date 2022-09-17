import { render } from '@testing-library/react'
import { Link } from './Link'

it('should render external link as expected', () => {
  const { getByRole } = render(<Link href="https://foo.bar.com" />)
  const link = getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('rel', 'noreferrer')
  expect(link).toHaveAttribute('target', '_blank')
})

it('should render internal link as expected', () => {
  const { getByRole } = render(<Link href="/foo/bar/" />)
  const link = getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).not.toHaveAttribute('rel', 'noreferrer')
  expect(link).not.toHaveAttribute('target', '_blank')
})
