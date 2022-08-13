import { createElement, PropsWithChildren } from 'react'
import styles from './Text.module.css'

type Props = PropsWithChildren<{
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size?: 'small' | 'medium' | 'large'
}>

export const Text = ({
  children,
  component = 'span',
  size = 'medium',
}: Props) =>
  createElement(component, { className: styles[`text--${size}`] }, children)
