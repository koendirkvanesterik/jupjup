import { PropsWithChildren, ReactNode } from 'react'
import styles from './Card.module.css'

type Props = PropsWithChildren<{
  actions?: ReactNode
  title?: string
}>

export const Card = ({ actions, children, title }: Props) => (
  <div className={styles.card}>
    <div className={styles['card__body']}>
      {title && <div className={styles['card__title']}>{title}</div>}
      {children}
      {actions && <div className={styles['card__actions']}>{actions}</div>}
    </div>
  </div>
)
