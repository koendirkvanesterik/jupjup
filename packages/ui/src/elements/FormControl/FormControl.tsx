import classNames from 'classnames'
import { PropsWithChildren, ReactNode } from 'react'
import styles from './FormControl.module.css'

type Props = PropsWithChildren<{
  error?: boolean
  hint?: ReactNode | string
  label?: ReactNode | string
}>

export const FormControl = ({ children, error, hint, label }: Props) => (
  <div className={styles['form-control']}>
    {label && <div className={styles['form-control__label']}>{label}</div>}
    {children}
    {hint && (
      <div
        className={classNames(
          styles['form-control__hint'],
          error && styles['form-control__hint--error'],
        )}
      >
        {hint}
      </div>
    )}
  </div>
)
