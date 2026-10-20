import Image from "next/image";
import CtaLink from "@/components/CtaLink/CtaLink";
import ExperienceSelector, { type ExperienceKey } from "@/components/ExperienceSelector/ExperienceSelector";
import styles from "./ExperienceTemplate.module.css";

const TABS: { key: ExperienceKey; label: string }[] = [
  { key: "twins", label: "Twins" },
  { key: "dreams", label: "Dreams" },
  { key: "echoes", label: "Echoes" },
];

export type ExperienceData = {
  key: ExperienceKey;
  eyebrow: string;
  headline: string;
  heroBody: string;
  cornerLabel?: string;
  artPending: string;
  heroImage?: { src: string; alt: string };
  midTitle: string;
  midBody: string;
  bullets: string[];
  closer: { title: string; body: string; image?: { src: string; alt: string } }[];
};

export default function ExperienceTemplate({ data }: { data: ExperienceData }) {
  return (
    <div className={`${styles.page} ${styles[`theme_${data.key}`]}`}>
      <ExperienceSelector active={data.key} />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h1 className={styles.heroHeadline}>{data.headline}</h1>
          <p className={styles.heroBody}>{data.heroBody}</p>
          <div className={styles.heroCtas}>
            <CtaLink href="/download" variant="primary" className={styles.cta}>
              Get Parallel <span aria-hidden="true">↗</span>
            </CtaLink>
          </div>
        </div>
        <div className={styles.heroArt} data-art-pending={data.heroImage ? undefined : data.artPending}>
          {data.heroImage ? (
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <div className={styles.heroArtRing} />
          )}
          {data.cornerLabel && <p className={styles.heroCornerLabel}>{data.cornerLabel}</p>}
        </div>
      </section>

      <section className={styles.mid}>
        <div className={styles.phone}>
          <div className={styles.phoneStatusBar}>
            <span>PARALLEL</span>
            <span>9:41</span>
          </div>
          <div className={styles.phoneTabs}>
            {TABS.map((tab) => (
              <span key={tab.key} className={tab.key === data.key ? styles.phoneTabActive : undefined}>
                {tab.label}
              </span>
            ))}
          </div>
          <div className={styles.phoneScreen} />
        </div>
        <div className={styles.midCopy}>
          <h2 className={styles.midTitle}>{data.midTitle}</h2>
          <p className={styles.midBody}>{data.midBody}</p>
          <ul className={styles.bullets}>
            {data.bullets.map((bullet) => (
              <li key={bullet}>
                <span className={styles.bulletMark} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.closer}>
        <p className={styles.closerHeading}>A closer look</p>
        <div className={styles.closerGrid}>
          {data.closer.map((card) => (
            <div key={card.title} className={styles.closerCard}>
              <div className={styles.closerArt} data-art-pending={card.image ? undefined : `${data.key} — ${card.title}`}>
                {card.image && (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <p className={styles.closerTitle}>{card.title}</p>
              <p className={styles.closerBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
