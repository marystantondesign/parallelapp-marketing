import Link from "next/link";
import styles from "./Footer.module.css";

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: "INSIDE PARALLEL", links: ["Twins", "Dreams", "Echoes", "Download"] },
  { heading: "CONTINUUM NETWORK", links: ["Relay network", "Relay hardware", "Patents"] },
  { heading: "LABS", links: ["Current betas", "Research partners", "CERN collaboration", "Publications"] },
  { heading: "COMPANY", links: ["Vera Continuum", "Leadership", "Careers", "Newsroom"] },
  { heading: "SUPPORT", links: ["Help center", "Session safety", "Accessibility", "FAQ"] },
];

// Only labels with a built page get a real href; everything else is shown as a
// clearly-labeled "soon" placeholder rather than a link that goes nowhere.
const HREF_BY_LABEL: Record<string, string> = {
  Twins: "/experiences/twins",
  Dreams: "/experiences/dreams",
  Echoes: "/experiences/echoes",
  Download: "/download",
  "Relay network": "/technology",
  "Relay hardware": "/technology",
  Publications: "/research",
  "Vera Continuum": "/about",
};

const LEGAL_LINKS = ["Privacy", "Terms", "Accessibility"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.wordmark}>
            PARALLEL
          </Link>
          <p className={styles.tagline}>A more expansive human future.</p>
          <div className={styles.social} aria-label="Social links">
            <a href="#" className={styles.socialIcon} aria-label="Parallel on X">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M18.3 2H21l-6.6 7.5L22 22h-6.3l-5-6.6L5 22H2.3l7.1-8-7-11.9h6.4l4.5 6 5-5.1Zm-1.1 18.2h1.7L7 3.7H5.2l12 16.5Z" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Parallel on Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Parallel on YouTube">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 9.5v5l4.5-2.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          {COLUMNS.map((column) => (
            <div key={column.heading} className={styles.column}>
              <p className={styles.columnHeading}>{column.heading}</p>
              {column.links.map((label) =>
                HREF_BY_LABEL[label] ? (
                  <Link key={label} href={HREF_BY_LABEL[label]} className={styles.columnLink}>
                    {label}
                  </Link>
                ) : (
                  <span key={label} className={styles.columnLinkSoon} title="Coming soon">
                    {label}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.legal}>
        <p className={styles.legalCompany}>Vera Continuum Laboratories</p>
        <div className={styles.legalLinks}>
          {LEGAL_LINKS.map((label) => (
            <span key={label} className={styles.columnLinkSoon} title="Coming soon">
              {label}
            </span>
          ))}
        </div>
        <p className={styles.legalCopyright}>© {new Date().getFullYear()} Parallel. All rights reserved.</p>
      </div>
    </footer>
  );
}
