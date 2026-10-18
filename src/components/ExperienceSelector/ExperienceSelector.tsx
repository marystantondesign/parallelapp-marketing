import Link from "next/link";
import styles from "./ExperienceSelector.module.css";

export type ExperienceKey = "twins" | "dreams" | "echoes";

const EXPERIENCES: { key: ExperienceKey; number: string; label: string; href: string }[] = [
  { key: "twins", number: "01", label: "TWINS", href: "/experiences/twins" },
  { key: "dreams", number: "02", label: "DREAMS", href: "/experiences/dreams" },
  { key: "echoes", number: "03", label: "ECHOES", href: "/experiences/echoes" },
];

export default function ExperienceSelector({ active }: { active: ExperienceKey }) {
  return (
    <nav className={styles.selector} aria-label="Experiences">
      {EXPERIENCES.map((experience) => (
        <Link
          key={experience.key}
          href={experience.href}
          className={experience.key === active ? `${styles.item} ${styles[`itemActive_${experience.key}`]}` : styles.item}
          aria-current={experience.key === active ? "page" : undefined}
        >
          <span className={styles.number}>{experience.number}</span>
          <span className={styles.label}>{experience.label}</span>
        </Link>
      ))}
    </nav>
  );
}
