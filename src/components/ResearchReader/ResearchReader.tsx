"use client";

import { useState } from "react";
import styles from "./ResearchReader.module.css";

type Paper = {
  tag: string;
  id: string;
  date: string;
  authors: string;
  title: string;
  abstract: string;
  body: string[];
  finding: string;
  color: string;
};

const PAPERS: Paper[] = [
  {
    tag: "FOUNDING RESULT · TWINS",
    id: "VCL-2019-004",
    date: "JUNE 2019",
    authors: "E. Verowski, R. Adeyemi, and 4 others",
    title: "Stabilized information transfer across adjacent reality states",
    abstract:
      "We report the first controlled, repeatable transfer of information between two adjacent branches of the universal wavefunction, stabilized by a resonant relay held at the boundary. The effect first appeared as an anomalous detector coincidence at CERN in 2016; here we reproduce it on demand and characterize its limits.",
    body: [
      "A branch that has recently separated from our own differs from it only in the outcome of a small number of events. We show that across such a branch, a signal can be held coherent long enough to cross the separating boundary and return. The relay does not open the branch. It holds a region of spacetime stable while the signal traverses it.",
      "The fidelity of the returned signal falls with the age of the divergence. We define a divergence coefficient from this falloff and demonstrate that it is measurable to within two percent. This coefficient, not any measure of similarity, is what the consumer product reports as a match percentage.",
      "We find no upper bound on the number of addressable branches, and no evidence that the act of addressing one alters it. The boundary is real, stable, and, with sufficient relay power, passable.",
    ],
    finding: "Adjacent branches are addressable, and the divergence between them is measurable.",
    color: "var(--color-brand-relay-blue)",
  },
  {
    tag: "INDUCTION · DREAMS & ECHOES",
    id: "VCL-2023-017",
    date: "MARCH 2023",
    authors: "Halcyon Sleep Research, Vera Continuum",
    title: "Hypnotic induction protocols for recollective sessions",
    abstract:
      "Building on the boundary model of VCL-2019-004, we show that the boundary between adjacent states is not fixed but lowered during specific states of consciousness, most reliably during sleep. We present a tone-and-light induction that returns a subject to a parallel they have previously reached unaided.",
    body: [
      "Sleep lowers the boundary. A measurable fraction of what is reported as dreaming is, on our instruments, brief unassisted crossing to a parallel in which no version of the sleeper exists. These crossings are ordinarily unrepeatable, because the sleeper cannot direct them.",
      "We demonstrate that a recorded account of such a crossing can be used to construct an induction that returns the same subject to the same parallel. The subject does not steer the return. The induction lowers the boundary along the path the original account describes.",
      "We report the screening protocol required before any subject may attempt a recollective session, and the rate of contraindication, roughly one in four. The protocol is a precondition of the consumer product and is not optional.",
    ],
    finding: "The boundary can be lowered on purpose, and a prior crossing can be returned to.",
    color: "var(--color-signal-degraded)",
  },
  {
    tag: "INFRASTRUCTURE · NETWORK",
    id: "VCL-2025-002",
    date: "JANUARY 2025",
    authors: "Continuum Network Engineering",
    title: "Relay array siting and regional coverage density",
    abstract:
      "We model the effective range of a Continuum Relay Array, the interference between adjacent arrays, and the population coverage achievable under realistic siting constraints. The paper accounts for the shape of the current coverage map and projects its quarterly expansion.",
    body: [
      "A single array holds the boundary stable within a finite radius that depends on power, terrain, and the local density of matter. Two arrays sited too closely interfere and reduce each other's effective range. We derive the minimum spacing that avoids this.",
      "Coverage is therefore not uniform and cannot be. It concentrates where arrays can be sited densely, which in practice means metropolitan areas. Rural coverage requires either higher-power arrays or acceptance of longer latency.",
      "We publish the siting model in full so that coverage claims can be independently checked against the map. A conversation with a twin cannot be established outside the modeled range, and the product refuses rather than degrades.",
    ],
    finding: "Coverage is bounded by physics, not policy, and the model is public.",
    color: "var(--color-signal-down)",
  },
];

export default function ResearchReader() {
  const [active, setActive] = useState(0);
  const paper = PAPERS[active];

  const goPrev = () => setActive((i) => (i - 1 + PAPERS.length) % PAPERS.length);
  const goNext = () => setActive((i) => (i + 1) % PAPERS.length);

  return (
    <div className={styles.reader}>
      <div className={styles.tabs}>
        {PAPERS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            className={i === active ? styles.tabActive : styles.tab}
            style={{ "--paper-color": p.color } as React.CSSProperties}
          >
            <span className={styles.tabIndex}>0{i + 1}</span>
            <span className={styles.tabTag}>{p.tag}</span>
          </button>
        ))}
      </div>

      <div className={styles.paper} style={{ "--paper-color": paper.color } as React.CSSProperties}>
        <p className={styles.paperMeta}>
          {paper.tag} · {paper.id} · {paper.date}
        </p>
        <h3 className={styles.paperTitle}>{paper.title}</h3>
        <p className={styles.paperAuthors}>{paper.authors}</p>

        <div className={styles.abstractBlock}>
          <p className={styles.abstractLabel}>ABSTRACT</p>
          <p className={styles.abstractText}>{paper.abstract}</p>
        </div>

        <div className={styles.body}>
          {paper.body.map((paragraph, i) => (
            <p key={i} className={styles.bodyPara}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.finding}>
          <p className={styles.findingLabel}>PRINCIPAL FINDING</p>
          <p className={styles.findingText}>{paper.finding}</p>
        </div>

        <div className={styles.nav}>
          <button type="button" onClick={goPrev} className={styles.navButton}>
            ← Prev
          </button>
          <span className={styles.navPosition}>
            {active + 1} / {PAPERS.length}
          </span>
          <button type="button" onClick={goNext} className={styles.navButton}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
