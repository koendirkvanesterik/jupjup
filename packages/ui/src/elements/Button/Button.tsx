import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './Button.module.css'

export type ButtonColor = 'error' | 'info' | 'success' | 'warn'
export type ButtonVariant = 'block' | 'ghost' | 'outline'

type Props = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    color?: ButtonColor
    variant?: ButtonVariant
  }
>

export const Button = ({ children, color, variant, ...rest }: Props) => (
  <button
    className={classNames(
      styles.button,
      color && styles[`button--${color}`],
      variant && styles[`button--${variant}`],
    )}
    {...rest}
  >
    {children}
  </button>
)
