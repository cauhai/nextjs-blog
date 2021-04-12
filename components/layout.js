import Link from 'next/link'
import styles from './layout.module.scss'

export default function Layout({ children, forHome }) {
  return (
    <div className={styles.layoutContainer}>
      <main>{children}</main>
      {forHome ? null : (
        <div className={styles.toHome}>
          <Link href="/"><a>← Back to home</a></Link>
        </div>
      )}
    </div>
  );
}
