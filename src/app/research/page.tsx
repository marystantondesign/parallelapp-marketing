import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ResearchList from "./ResearchList";
import styles from "./page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.header}>
        <p className={styles.eyebrow}>Research</p>
        <h1 className={styles.headline}>Published work.</h1>
        <div className={styles.headerRow}>
          <p className={styles.headerBody}>
            Explore our research on consciousness, quantum physics, and interdimensional theory. All publications
            are peer-reviewed and available to the public.
          </p>
        </div>
      </section>

      <div className={styles.body}>
        <ResearchList />
      </div>

      <Footer />
    </div>
  );
}
