import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './Container.module.css'

type Props = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large'
}>

export const Container = ({ children, size = 'medium' }: Props) => (
  <div className={classNames(styles.container, styles[`container--${size}`])}>
    {children}
  </div>
)
