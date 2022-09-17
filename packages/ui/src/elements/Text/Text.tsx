import { createElement, PropsWithChildren } from 'react'
import styles from './Text.module.css'

export type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
export type TextSize = 'small' | 'medium' | 'large'

type Props = PropsWithChildren<{
  component?: TextComponent
  size?: TextSize
}>

export const Text = ({
  children,
  component = 'span',
  size = 'medium',
}: Props) =>
  createElement(component, { className: styles[`text--${size}`] }, children)
