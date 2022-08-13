import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export const Input = (props: Props) => (
  <input className={styles.input} {...props} />
)
