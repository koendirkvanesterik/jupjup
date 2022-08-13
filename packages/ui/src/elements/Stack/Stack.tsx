import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './Stack.module.css'

type Props = PropsWithChildren<{
  direction?: 'column' | 'row'
  justify?: 'flex-start' | 'space-between'
  spacing?: 'none' | 'small' | 'medium' | 'large'
}>

export const Stack = ({
  children,
  direction = 'column',
  justify = 'flex-start',
  spacing = 'none',
}: Props) => (
  <div
    className={classNames(
      styles.stack,
      styles[`stack--${direction}-${spacing}`],
      styles[`stack--${justify}`],
    )}
  >
    {children}
  </div>
)
