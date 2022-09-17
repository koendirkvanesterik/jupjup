import { render } from '@testing-library/react'
import { Menu } from './Menu'
import { items } from './__stubs__/items'

it('should render as expected', () => {
  const { getAllByRole, getByRole } = render(<Menu items={items} />)
  expect(getByRole('list')).toBeInTheDocument()
  expect(getAllByRole('listitem')).toHaveLength(3)
  expect(getAllByRole('link')).toHaveLength(3)
})

it('should render with active link as expected', () => {
  const { getByRole } = render(
    <Menu items={[{ ...items[0], isActive: true }]} />,
  )
  expect(getByRole('listitem')).toHaveClass('menu__item--active')
})

it('should render empty component if empty items array is passed', () => {
  const { container } = render(<Menu items={[]} />)
  expect(container).toBeEmptyDOMElement()
})

it('should render empty component if no items are passed', () => {
  const { container } = render(<Menu />)
  expect(container).toBeEmptyDOMElement()
})
