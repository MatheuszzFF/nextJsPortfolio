import Link from 'next/link'
import styles from './Logo.module.css'

type TLogo = {
  scrolled: boolean
}

export const Logo = (props: TLogo) => {
  const { scrolled } = props
  return (
    <Link 
    href="/"
    className={`${styles.logo} opacityHover ${scrolled && styles.scrolled}`}
    >M</Link>
  )
}
