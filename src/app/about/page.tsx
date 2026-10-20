import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const MISSION_COLS = [
  { label: "Explore", body: "Help people discover new dimensions of their identity." },
  { label: "Advance", body: "Advance the science of consciousness through real-world applications." },
  { label: "Connect", body: "Give people tools to build meaningful connections and expansive lives." },
];

const CHECKLIST = ["Peer-reviewed research", "Human-centered design", "Real-world applications", "Ongoing evaluation"];

const DISCIPLINES = [
  { label: "Neuroscience", body: "Advancing the science of consciousness." },
  { label: "Engineering", body: "Building responsive, immersive technology." },
  { label: "Design", body: "Crafting intuitive human experiences." },
  { label: "Research", body: "Proving outcomes through real-world study." },
];

export default function About() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>About</p>
          <h1 className={styles.heroHeadline}>A more expansive human future.</h1>
          <p className={styles.heroBody}>
            Parallel is expanding what&rsquo;s possible — rethinking the nature of identity, consciousness, and
            reality. We build technology that helps people reach every version of themselves, and the world beyond
            it.
          </p>
        </div>
        <div className={styles.heroArt} data-art-pending="Figure overlooking clouds and a rising moon" />
      </section>

      <section className={styles.mission}>
        <div className={styles.missionCopy}>
          <p className={styles.eyebrow}>Our mission</p>
          <h2 className={styles.sectionTitle}>To expand what it means to be human.</h2>
          <p className={styles.sectionBody}>
            We create tools that help people explore their identity, expand their awareness, and connect with the
            larger story of who they are — across time, space, and possibility.
          </p>
        </div>
        <div className={styles.missionCols}>
          {MISSION_COLS.map((col) => (
            <div key={col.label} className={styles.missionCol}>
              <div className={styles.missionIcon} aria-hidden="true" />
              <p className={styles.missionColLabel}>{col.label}</p>
              <p className={styles.missionColBody}>{col.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.science}>
        <div className={styles.scienceArt} data-art-pending="Duotone portrait, mirrored profile in cobalt" />
        <div className={styles.scienceCopy}>
          <p className={styles.eyebrow}>Our approach</p>
          <h2 className={styles.sectionTitle}>Built on science. Designed for people.</h2>
          <p className={styles.sectionBody}>
            Parallel combines advances in neuroscience, artificial intelligence, and cross-dimensional physics to
            create experiences that are both scientifically grounded and deeply personal.
          </p>
          <ul className={styles.checklist}>
            {CHECKLIST.map((item) => (
              <li key={item}>
                <span className={styles.checkMark} aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.global}>
        <div className={styles.globalCopy}>
          <p className={styles.eyebrow}>A global perspective</p>
          <h2 className={styles.sectionTitle}>One platform. Many realities.</h2>
          <p className={styles.sectionBody}>
            Parallel is built for a global community of explorers, researchers, and everyday people curious about
            what lies beyond the ordinary. Our network spans every inhabited continent, grounded in a conviction
            that human curiosity is far greater than we&rsquo;ve ever imagined.
          </p>
        </div>
        <div className={styles.globalArt}>
          <Image
            src="/images/about-global.png"
            alt="Earth seen from orbit at night, city lights connected by a glowing network"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.teamCopy}>
          <p className={styles.eyebrow}>The team</p>
          <h2 className={styles.sectionTitle}>A multidisciplinary team with a shared vision.</h2>
          <p className={styles.sectionBody}>
            Our team combines neuroscience, engineering, design, and research — people drawn together by a common
            goal: to make extraordinary experiences accessible, safe, and genuinely expansive.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {DISCIPLINES.map((discipline) => (
            <div key={discipline.label} className={styles.teamCard}>
              <div className={styles.teamArt} data-art-pending={`${discipline.label} discipline photo`} />
              <p className={styles.teamLabel}>{discipline.label}</p>
              <p className={styles.teamBody}>{discipline.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
