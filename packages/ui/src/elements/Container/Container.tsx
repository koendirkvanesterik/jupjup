import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './Container.module.css'

export type ContainerSize = 'small' | 'medium' | 'large'

type Props = PropsWithChildren<{
  size?: ContainerSize
}>

export const Container = ({ children, size = 'medium' }: Props) => (
  <div className={classNames(styles.container, styles[`container--${size}`])}>
    {children}
  </div>
)
