"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Experiences", href: "/experiences/twins", matchPrefix: "/experiences" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.wordmark}>
        PARALLEL
      </Link>
      <nav className={styles.links} aria-label="Primary">
        {LINKS.map((link) => {
          const isActive = pathname?.startsWith(link.matchPrefix ?? link.href);
          return (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link href="/download" className={styles.cta}>
        Get Parallel <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
