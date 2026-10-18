import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import PaperThumb from "@/components/PaperThumb/PaperThumb";
import { PAPERS, getPaper } from "@/lib/research";
import PaperTabs from "./PaperTabs";
import styles from "./page.module.css";

export function generateStaticParams() {
  return PAPERS.map((paper) => ({ slug: paper.slug }));
}

export default async function PublicationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = getPaper(slug);

  if (!paper) {
    notFound();
  }

  const authorsLine = [...paper.authors, ...(paper.authorsExtra ? [`+${paper.authorsExtra}`] : [])].join("   ");

  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.header}>
        <div className={styles.headerRow}>
          <Link href="/research" className={styles.backLink}>
            <span aria-hidden="true">←</span> All publications
          </Link>
          <span className={styles.id}>{paper.id}</span>
        </div>
        <h1 className={styles.title}>{paper.title}</h1>
        <p className={styles.authors}>{authorsLine}</p>
        <p className={styles.meta}>
          {paper.affiliation} <span aria-hidden="true">·</span> Published {paper.year}
        </p>
      </section>

      <section className={styles.figure}>
        <PaperThumb kind={paper.thumb} className={styles.figureArt} />
      </section>

      <section className={styles.body}>
        <PaperTabs paper={paper} />

        <aside className={styles.sidebar}>
          <div className={styles.downloadPanel}>
            <p className={styles.downloadHeading}>Download</p>
            <span className={styles.downloadButton} title="Full PDF coming soon">
              <span aria-hidden="true">⬇</span> Read paper (PDF)
            </span>
            <span className={styles.downloadLink} title="Coming soon">
              Supplementary data
            </span>
            <span className={styles.downloadLink} title="Coming soon">
              Citations (BibTeX)
            </span>
            <span className={styles.downloadLink} title="Coming soon">
              Share
            </span>
          </div>

          <div className={styles.metaPanel}>
            <p className={styles.metaLabel}>Field</p>
            <p className={styles.metaValue}>{paper.field}</p>

            <p className={styles.metaLabel}>Keywords</p>
            <ul className={styles.keywordList}>
              {paper.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>

            <p className={styles.metaLabel}>DOI</p>
            <p className={styles.metaValueMono}>{paper.doi}</p>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}
