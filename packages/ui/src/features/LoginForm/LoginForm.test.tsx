import { render } from '@testing-library/react'
import { LoginForm } from './LoginForm'

it('should render as expected', () => {
  const { getByRole } = render(<LoginForm />)
  expect(getByRole('textbox')).toBeInTheDocument()
  expect(getByRole('button', { name: 'login' })).toBeInTheDocument()
  expect(getByRole('link', { name: 'forgot-password' })).toBeInTheDocument()
  expect(getByRole('link', { name: 'register' })).toBeInTheDocument()
})
