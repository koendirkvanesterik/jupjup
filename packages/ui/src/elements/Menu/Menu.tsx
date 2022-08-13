import classNames from 'classnames'
import { Link } from '../Link'
import styles from './Menu.module.css'

type MenuItemProps = {
  href: string
  isActive?: boolean
  label: string
}

type MenuProps = {
  items?: MenuItemProps[]
}

export const Menu = ({ items }: MenuProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <ul className={styles.menu}>
      {items.map(({ href, isActive, label }) => (
        <MenuItem href={href} isActive={isActive} key={href} label={label} />
      ))}
    </ul>
  )
}

const MenuItem = ({ href, isActive, label }: MenuItemProps) => (
  <li
    key={href}
    className={classNames(
      styles.menu__item,
      isActive && styles['menu__item--active'],
    )}
  >
    <Link href={href}>{label}</Link>
  </li>
)
