"use client";

import { useState } from "react";
import type { Paper } from "@/lib/research";
import styles from "./page.module.css";

const TABS: { key: keyof Pick<Paper, "abstract" | "methodology" | "findings" | "discussion">; label: string }[] = [
  { key: "abstract", label: "Abstract" },
  { key: "methodology", label: "Methodology" },
  { key: "findings", label: "Findings" },
  { key: "discussion", label: "Discussion" },
];

export default function PaperTabs({ paper }: { paper: Paper }) {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("abstract");

  return (
    <div className={styles.tabsBlock}>
      <div className={styles.tabList} role="tablist" aria-label="Publication sections">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={active === tab.key}
            aria-controls={`panel-${tab.key}`}
            className={active === tab.key ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {TABS.map((tab) => (
        <div
          key={tab.key}
          role="tabpanel"
          id={`panel-${tab.key}`}
          aria-labelledby={`tab-${tab.key}`}
          hidden={active !== tab.key}
          className={styles.tabPanel}
        >
          <p>{paper[tab.key]}</p>
        </div>
      ))}
    </div>
  );
}
