import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import styles from './Link.module.css'

type Props = PropsWithChildren<{ href: string }>

export const Link = ({ children, href }: Props) =>
  /^https?:/.test(href) ? (
    <a className={styles.link} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a className={styles.link}>{children}</a>
    </NextLink>
  )
