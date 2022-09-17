import classNames from 'classnames'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import styles from './Link.module.css'

export type LinkVariant = 'underline'

type Props = PropsWithChildren<{ href: string; variant?: LinkVariant }>

export const Link = ({ children, href, variant }: Props) =>
  /^https?:/.test(href) ? (
    <a
      className={classNames(variant && styles[`link--${variant}`])}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a className={classNames(variant && styles[`link--${variant}`])}>
        {children}
      </a>
    </NextLink>
  )
