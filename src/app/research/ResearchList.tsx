"use client";

import { useState } from "react";
import Link from "next/link";
import PaperThumb from "@/components/PaperThumb/PaperThumb";
import { PAPERS, RESEARCH_TOPICS } from "@/lib/research";
import styles from "./page.module.css";

export default function ResearchList() {
  const [topic, setTopic] = useState<string>("All");

  const papers = topic === "All" ? PAPERS : PAPERS.filter((paper) => paper.tags.includes(topic));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter publications by topic">
        {RESEARCH_TOPICS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTopic(item)}
            className={item === topic ? `${styles.filterPill} ${styles.filterPillActive}` : styles.filterPill}
            aria-pressed={item === topic}
          >
            {item}
          </button>
        ))}
      </div>

      {papers.length === 0 ? (
        <p className={styles.empty}>No publications match this topic yet.</p>
      ) : (
        <div className={styles.list}>
          {papers.map((paper) => (
            <Link key={paper.slug} href={`/research/${paper.slug}`} className={styles.row}>
              <div className={styles.thumb}>
                <PaperThumb kind={paper.thumb} />
              </div>
              <div className={styles.rowBody}>
                <div className={styles.rowHead}>
                  <h2 className={styles.rowTitle}>{paper.title}</h2>
                  <span className={styles.rowId}>{paper.id}</span>
                </div>
                <p className={styles.rowAbstract}>{paper.abstract}</p>
                <div className={styles.tagRow}>
                  {paper.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
