import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import CtaLink from "@/components/CtaLink/CtaLink";
import PaperThumb from "@/components/PaperThumb/PaperThumb";
import { PAPERS } from "@/lib/research";
import styles from "./page.module.css";

const EXPLORE = [
  {
    number: "01",
    title: "Twins",
    body: "Connect with verified versions of yourself in neighboring realities.",
    href: "/experiences/twins",
  },
  {
    number: "02",
    title: "Dreams",
    body: "Revisit the dreams you've had and explore the worlds within them.",
    href: "/experiences/dreams",
  },
  {
    number: "03",
    title: "Echoes",
    body: "Discover the lives that came before — and what might have been.",
    href: "/experiences/echoes",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>A new frontier in human experience</p>
          <h1 className={styles.heroHeadline}>Reality is bigger than we thought.</h1>
          <p className={styles.heroBody}>
            Connect with alternate versions of yourself. Explore the worlds you visit in dreams. Discover the lives
            that came before.
          </p>
          <div className={styles.heroCtas}>
            <CtaLink href="/download" variant="primary">
              Get Parallel <span aria-hidden="true">↗</span>
            </CtaLink>
            <CtaLink href="/technology" variant="ghost">
              Learn more <span aria-hidden="true">→</span>
            </CtaLink>
          </div>
        </div>
        <div className={styles.heroArt}>
          <Image
            src="/images/home-hero.png"
            alt="Duotone double portrait representing an alternate version of yourself"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      <section className={styles.explore}>
        <p className={styles.eyebrow}>Three ways to explore</p>
        <div className={styles.exploreRow}>
          <div className={styles.exploreCards}>
            {EXPLORE.map((item) => (
              <Link key={item.title} href={item.href} className={styles.exploreCard}>
                <span className={styles.exploreNumber}>{item.number}</span>
                <p className={styles.exploreTitle}>{item.title}</p>
                <p className={styles.exploreBody}>{item.body}</p>
                <span className={styles.exploreArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.exploreArt} aria-hidden="true">
            <span className={styles.exploreArtCircle} />
            <span className={styles.exploreArtCircle} />
          </div>
        </div>
      </section>

      <section className={styles.app}>
        <div className={styles.appCopy}>
          <p className={styles.eyebrow}>The Parallel app</p>
          <h2 className={styles.appHeadline}>The extraordinary feels ordinary.</h2>
          <p className={styles.appBody}>Beautifully designed. Intuitively simple. Built on breakthrough science.</p>
          <Link href="/technology" className={styles.appLink}>
            See the app in action <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.phones} data-art-pending="Three overlapping phone mockups">
          <div className={`${styles.phone} ${styles.phoneDreams}`}>
            <div className={styles.phoneStatusBar}>
              <span>9:41</span>
            </div>
            <p className={styles.phoneLabel}>Dreams</p>
            <p className={styles.phoneSub}>Dream journal</p>
          </div>
          <div className={`${styles.phone} ${styles.phoneTwins}`}>
            <div className={styles.phoneStatusBar}>
              <span>9:41</span>
            </div>
            <div className={styles.phoneAvatar} />
            <p className={styles.phoneLabel}>Your Twin</p>
            <p className={styles.phoneSub}>Verified · 12:07</p>
          </div>
          <div className={`${styles.phone} ${styles.phoneEchoes}`}>
            <div className={styles.phoneStatusBar}>
              <span>9:41</span>
            </div>
            <p className={styles.phoneLabel}>Echoes</p>
            <p className={styles.phoneSub}>A past life</p>
          </div>
        </div>

        <div className={styles.appAvailability}>
          <p className={styles.appAvailabilityLabel}>Available on iOS and Android</p>
          <div className={styles.storeBadges}>
            <CtaLink href="/download" variant="secondary" className={styles.storeBadge}>
              <span className={styles.storeBadgeMeta}>Download on the</span>
              <span>App Store</span>
            </CtaLink>
            <CtaLink href="/download" variant="secondary" className={styles.storeBadge}>
              <span className={styles.storeBadgeMeta}>Get it on</span>
              <span>Google Play</span>
            </CtaLink>
          </div>
        </div>
      </section>

      <section className={styles.science}>
        <div className={styles.scienceCopy}>
          <p className={styles.eyebrow}>The science</p>
          <h2 className={styles.scienceHeadline}>Built on real research. Powered by a global network.</h2>
          <p className={styles.scienceBody}>
            Every Parallel experience depends on the same infrastructure: a global network of relay arrays that hold
            adjacent reality states stable long enough to reach them. The physics is peer-reviewed. The network is
            expanding every quarter.
          </p>
          <Link href="/technology" className={styles.appLink}>
            Learn about our research <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.scienceArt}>
          <Image
            src="/images/home-science-sphere.png"
            alt="Wireframe sphere diagram labeled relay array, quantum link, and verification"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      <section className={styles.research}>
        <div className={styles.researchHead}>
          <div>
            <p className={styles.eyebrow}>Research</p>
            <h2 className={styles.researchHeadline}>Published work.</h2>
          </div>
          <Link href="/research" className={styles.appLink}>
            View all publications <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.researchList}>
          {PAPERS.map((paper) => (
            <Link key={paper.slug} href={`/research/${paper.slug}`} className={styles.researchRow}>
              <div className={styles.researchThumb}>
                <PaperThumb kind={paper.thumb} />
              </div>
              <p className={styles.researchTitle}>{paper.title}</p>
              <span className={styles.researchId}>{paper.id}</span>
              <span className={styles.researchArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
