import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Download() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Get Parallel</p>
        <h1 className={styles.headline}>Parallel is almost here.</h1>
        <p className={styles.body}>
          The app is in private beta ahead of a public launch on iOS and Android. Join the waitlist to be notified
          the moment it opens to you.
        </p>

        <div className={styles.storesRow} aria-label="App store availability, coming soon">
          <span className={styles.storeBadge} title="Coming soon">
            <span className={styles.storeBadgeMeta}>Coming soon to the</span>
            <span>App Store</span>
          </span>
          <span className={styles.storeBadge} title="Coming soon">
            <span className={styles.storeBadgeMeta}>Coming soon on</span>
            <span>Google Play</span>
          </span>
        </div>

        <p className={styles.note}>Preview only — download links will go live at public launch.</p>
      </section>

      <Footer />
    </div>
  );
}
