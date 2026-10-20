import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const SECTIONS = [
  {
    number: "01",
    label: "INTRODUCTION",
    title: "The science of connection.",
    body: "Parallel enables information to travel between neighboring realities through a combination of quantum entanglement, relay arrays, and consciousness interface technology.",
    link: { label: "Explore the science", href: "/research" },
    art: "polar",
  },
  {
    number: "02",
    label: "INFRASTRUCTURE",
    title: "The Continuum Network.",
    body: "A global network of relay arrays that stabilizes connections between adjacent reality states.",
    link: { label: "Explore the network", href: "/research/vcl-2025-002" },
    art: "map",
  },
  {
    number: "03",
    label: "VERIFICATION",
    title: "Finding your other selves.",
    body: "Our identity verification system matches you with corresponding versions of yourself across neighboring realities.",
    link: { label: "How verification works", href: "/experiences/twins" },
    art: "faces",
  },
  {
    number: "04",
    label: "APPLICATIONS",
    title: "One platform. Three experiences.",
    body: "Twins, Dreams, and Echoes are three distinct applications of the same underlying network, each configured for a different kind of boundary.",
    link: null,
    art: "apps",
  },
  {
    number: "05",
    label: "SAFETY & RESEARCH",
    title: "Built for responsible exploration.",
    body: "Rigorous safety protocols, privacy protections, and ongoing research ensure that Parallel remains a secure and beneficial platform.",
    link: { label: "Our approach", href: "/about" },
    art: "building",
  },
] as const;

const APPS = [
  { key: "twins", label: "TWINS", caption: "Identity connection" },
  { key: "dreams", label: "DREAMS", caption: "Consciousness exploration" },
  { key: "echoes", label: "ECHOES", caption: "Temporal access" },
];

export default function Technology() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.header}>
        <p className={styles.eyebrow}>Technology</p>
        <h1 className={styles.headline}>How Parallel works.</h1>
      </section>

      <div className={styles.sections}>
        {SECTIONS.map((section) => (
          <div key={section.number} className={styles.section}>
            <div className={styles.sectionCopy}>
              <p className={styles.sectionLabel}>
                {section.number} / {section.label}
              </p>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionBody}>{section.body}</p>
              {section.link && (
                <a href={section.link.href} className={styles.sectionLink}>
                  {section.link.label} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
            <div className={styles.sectionArt}>
              {section.art === "polar" && (
                <div className={`${styles.art} ${styles.artPolar}`}>
                  <Image
                    src="/images/technology-intro-sphere.png"
                    alt="Wireframe sphere diagram representing quantum entanglement between relay arrays"
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
              {section.art === "map" && (
                <div className={`${styles.art} ${styles.artMap}`} data-art-pending="World map, relay node overlay" />
              )}
              {section.art === "faces" && (
                <div className={`${styles.art} ${styles.artFaces}`} data-art-pending="Verification diagram, two mirrored profiles" />
              )}
              {section.art === "apps" && (
                <div className={styles.appsRow}>
                  {APPS.map((app) => (
                    <div key={app.key} className={styles.appIcon}>
                      <div className={`${styles.appIconMark} ${styles[`appIconMark_${app.key}`]}`} aria-hidden="true" />
                      <p className={styles.appIconLabel}>{app.label}</p>
                      <p className={styles.appIconCaption}>{app.caption}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.art === "building" && (
                <div className={`${styles.art} ${styles.artBuilding}`} data-art-pending="Vera Continuum Laboratories campus photo" />
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
