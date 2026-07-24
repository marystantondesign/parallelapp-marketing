import Link from "next/link";
import styles from "./Footer.module.css";

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: "INSIDE PARALLEL", links: ["Overview", "Twins", "Dreams", "Echoes", "Exchange", "Download"] },
  { heading: "CONTINUUM NETWORK", links: ["Relay network", "Coverage map", "Network status", "Relay hardware", "Patents"] },
  { heading: "LABS", links: ["Current betas", "Request access", "Research partners", "CERN collaboration", "Publications"] },
  { heading: "COMPANY", links: ["Vera Continuum", "Leadership", "Careers", "Newsroom", "Timeline"] },
  { heading: "SUPPORT", links: ["Help center", "Contact", "Session safety", "Report an issue", "Accessibility"] },
];

// Only labels with a built page get a real href; everything else stays a placeholder until that page exists.
const HREF_BY_LABEL: Record<string, string> = {
  Overview: "/the-app",
  Twins: "/twins",
  Dreams: "/dreams",
  Echoes: "/echoes",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {COLUMNS.map((column) => (
          <div key={column.heading} className={styles.column}>
            <p className={styles.columnHeading}>{column.heading}</p>
            {column.links.map((label) => (
              <Link key={label} href={HREF_BY_LABEL[label] || "#"} className={styles.columnLink}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.legal}>
        <p>Parallel is a Vera Continuum Laboratories product</p>
        <p>Parallel is not a substitute for professional mental health care.</p>
      </div>
    </footer>
  );
}
