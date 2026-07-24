import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = ["Overview", "Network", "Labs", "Research", "Safety", "Company"];

export default function Nav({ variant = "default" }: { variant?: "default" | "hero" }) {
  const isHero = variant === "hero";
  return (
    <header className={`${styles.nav} ${isHero ? styles.navHero : ""}`}>
      {isHero ? (
        <p className={styles.wordmarkHero}>Parallel</p>
      ) : (
        <div className={styles.logoLockup}>
          <div className={styles.mark} data-figma-asset-pending="37:15" />
          <p className={styles.wordmark}>Parallel</p>
        </div>
      )}
      <nav className={styles.links}>
        {LINKS.map((label) => (
          <Link key={label} href={`/${label.toLowerCase()}`} className={styles.link}>
            {label}
          </Link>
        ))}
        <Link href="/download" className={styles.download}>
          Download
        </Link>
      </nav>
    </header>
  );
}
