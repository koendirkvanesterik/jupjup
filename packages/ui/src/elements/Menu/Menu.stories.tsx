import { Menu } from './Menu'
import { items } from './__stubs__/items'

export const Base = () => (
  <div className="max-w-xs">
    <Menu items={items} />
  </div>
)

export const ActiveItem = () => (
  <div className="max-w-xs">
    <Menu
      items={[{ ...items[0], isActive: true }, ...items.slice(1, items.length)]}
    />
  </div>
)

export default {
  component: Menu,
  title: 'Elements/Menu',
}
