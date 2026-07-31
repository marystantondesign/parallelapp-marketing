import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.wordmark}>
        Parallel
      </Link>
      <nav className={styles.links}>
        <Link href="/the-app" className={styles.link}>
          The App
        </Link>
        <Link href="/company" className={styles.link}>
          Company
        </Link>
        <Link href="/download" className={styles.download}>
          Download
        </Link>
      </nav>
    </header>
  );
}
