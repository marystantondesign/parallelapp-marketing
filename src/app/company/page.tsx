import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ResearchReader from "@/components/ResearchReader/ResearchReader";
import styles from "./page.module.css";

const ON_RECORD = [
  { label: "EFFECT", value: "Verowski" },
  { label: "OBSERVED", value: "CERN, 2016" },
  { label: "FOUNDED", value: "2019" },
  { label: "STATUS", value: "ADDRESSABLE", gold: true },
];

const MECHANISMS = [
  {
    eyebrow: "LATERAL TRANSFER",
    title: "Twins",
    body: "The relay locates a branch, verifies the identity against your own signature, and opens a channel. The match percentage is not compatibility. It measures when the two branches diverged.",
    color: "var(--color-brand-relay-blue)",
  },
  {
    eyebrow: "UNASSISTED CROSSING",
    title: "Dreams",
    body: "Sleep lowers the boundary. It always has. Dreaming is, in a measurable fraction of cases, brief travel to a parallel where no version of you exists. Induction can take you back to the same one.",
    color: "var(--color-signal-degraded)",
  },
  {
    eyebrow: "RETROGRADE CROSSING",
    title: "Echoes",
    body: "The others move sideways. Echoes moves backward, along your own line, using induction alone. What returns is unverifiable by definition. We claim only that the crossing is real.",
    color: "var(--color-signal-down)",
  },
];

export default function Company() {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>The science</p>
        <h1 className={styles.heroHeadline}>None of this is new. The physics is only recent.</h1>
        <p className={styles.heroLead}>
          For a century, two facts sat next to each other without touching. Quantum mechanics said reality branches.
          People said they had been reaching those branches all their lives. The first was mathematics. The second
          was anecdote. Our founding result was the bridge.
        </p>
      </section>

      <section className={styles.verowski}>
        <div className={styles.verowskiCopy}>
          <h2 className={styles.verowskiHeading}>The Verowski effect</h2>
          <p className={styles.verowskiBody}>
            In 2016, a calibration run at CERN recorded a coincidence the standard model could not produce. Two
            detectors registered one event with a separation implying the signal arrived from a state adjacent to
            our own. Published, disputed, shelved. Three years later, two of that collaboration founded Vera
            Continuum on a single claim: the coincidence was not error. Adjacent states are not only real. They are
            addressable.
          </p>
        </div>
        <div className={styles.recordCard}>
          <p className={styles.recordTitle}>On record</p>
          <div className={styles.recordRows}>
            {ON_RECORD.map((row) => (
              <div key={row.label} className={styles.recordRow}>
                <span className={styles.recordLabel}>{row.label}</span>
                <span className={row.gold ? styles.recordValueGold : styles.recordValue}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.relay}>
        <h2 className={styles.relayHeading}>Why a relay is required</h2>
        <p className={styles.relayBody}>
          Adjacent states are separated by a boundary that is ordinarily impassable. Crossing it means holding a
          small region of spacetime stable long enough for information to cross and return coherent. That is all a
          Continuum Relay Array does. It does not create the parallel. It does not create the connection. It holds
          the door open. This is why Twins needs coverage and Dreams and Echoes do not.
        </p>
      </section>

      <section className={styles.mechanisms}>
        {MECHANISMS.map((m) => (
          <div key={m.title} className={styles.mechanismCard} style={{ "--mechanism-color": m.color } as React.CSSProperties}>
            <p className={styles.mechanismEyebrow}>{m.eyebrow}</p>
            <p className={styles.mechanismTitle}>{m.title}</p>
            <p className={styles.mechanismBody}>{m.body}</p>
          </div>
        ))}
      </section>

      <section className={styles.thesis}>
        <p className={styles.thesisEyebrow}>WHAT WE DO NOT BUILD</p>
        <p className={styles.thesisText}>
          The relay does not generate experiences. Induction does not implant them. Every mechanism is retrieval. The
          parallel was already there. You were always able to reach it. What we built is the instrument.
        </p>
      </section>

      <section className={styles.research}>
        <p className={styles.eyebrow}>Research</p>
        <h2 className={styles.researchHeading}>The record.</h2>
        <p className={styles.researchSub}>
          Every claim above is on the record. Read the founding results in full, here. One paper under each
          mechanism.
        </p>
        <ResearchReader />
      </section>

      <Footer />
    </div>
  );
}
