import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './Stack.module.css'

export type StackAlignment = 'flex-start' | 'space-between'
export type StackDirection = 'column' | 'row'
export type StackSpacing = 'none' | 'small' | 'medium' | 'large'

type Props = PropsWithChildren<{
  alignment?: StackAlignment
  direction?: StackDirection
  spacing?: StackSpacing
}>

export const Stack = ({
  children,
  direction = 'column',
  alignment: justify = 'flex-start',
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
