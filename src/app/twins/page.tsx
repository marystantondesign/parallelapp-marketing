import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Ticker from "@/components/Ticker/Ticker";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";

const FEATURES = [
  {
    title: "Verified before a channel opens",
    body: "Parallel confirms the identity on the other end against your own signature before anything is sent. Unverified matches are refused and logged.",
    diagram: "Diagram / Relay array — pending asset",
    diagramId: "39:49",
    visualFirst: true,
  },
  {
    title: "Voice and video",
    body: "Latency depends on your distance from the nearest relay. Most metropolitan users see under 200 milliseconds. Rural users should expect more.",
    diagram: "Diagram / Field lines — pending asset",
    diagramId: "39:33",
    visualFirst: false,
  },
  {
    title: "Your side of it, kept",
    body: "Threads are stored locally and encrypted. Export or delete one at any time. Your twin keeps their own copy on their side and you cannot delete theirs.",
    diagram: "Diagram / Orbital paths — pending asset",
    diagramId: "39:62",
    visualFirst: true,
  },
];

const SPECS = [
  { label: "Channels", value: "Text, voice, video" },
  { label: "Classification", value: "Identical at 90% and above" },
  { label: "Maximum session length", value: "40 minutes" },
  { label: "Verification", value: "Biometric signature match" },
  { label: "Relay generation required", value: "Gen 3 or later" },
  { label: "Behavior in dead zones", value: "Queued, delivered on reconnect" },
];

const TWINS = [
  { id: "TWIN #203", name: "Mila", classification: "IDENTICAL", percent: "97%", color: "var(--color-brand-relay-blue)" },
  { id: "TWIN #266", name: "Míla", classification: "IDENTICAL", percent: "92%", color: "var(--color-brand-relay-blue)" },
  { id: "TWIN #723", name: "Mila", classification: "FRATERNAL", percent: "76%", color: "var(--color-signal-degraded)" },
  { id: "TWIN #887", name: "Sylvie", classification: "FRATERNAL", percent: "58%", color: "var(--color-signal-degraded)" },
  { id: "TWIN #944", name: "Robbie", classification: "FRATERNAL", percent: "53%", color: "var(--color-signal-degraded)" },
];

const STEPS = [
  { number: "01", title: "Contact", body: "Exchange stays locked until the two of you have talked enough for it to appear." },
  { number: "02", title: "Consent", body: "Both sides confirm separately. Neither of you sees the other's answer until both are in." },
  { number: "03", title: "Fifteen minutes", body: "A hard stop. The relay closes the channel whether or not you are finished." },
  { number: "04", title: "Return", body: "A short reorientation runs on both sides. Sessions are logged to both accounts." },
];

const RELATED = [
  { title: "Dreams", body: "Record what you remember, in your own words." },
  { title: "Dreams", body: "Return to a dream you have already had." },
  { title: "Echoes", body: "Guided sessions into earlier recollection." },
];

export default function Twins() {
  return (
    <div className={styles.page}>
      <Nav />
      <Ticker />

      <section className={styles.hero}>
        <div className={styles.heroRow}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>PARALLEL · TWINS</p>
            <h1 className={styles.heroHeadline}>Identical, or fraternal.</h1>
            <p className={styles.heroBody}>
              A twin is a version of you living right now, in a reality close enough to hold a conversation. Every
              twin is classified by how far the two realities have drifted apart.
            </p>
            <div className={styles.ctas}>
              <Button variant="primary" style={{ background: "var(--color-signal-degraded)", color: "var(--color-text-primary)" }}>
                Download Parallel
              </Button>
              <Button
                variant="secondary"
                style={{ color: "var(--color-accent-default)", borderColor: "var(--color-accent-default)", borderWidth: "1.5px" }}
              >
                Read the safety guide
              </Button>
            </div>
          </div>
          <div className={styles.device}>
            <div className={styles.deviceStatusBar}>
              <span>9:41</span>
              <span>RELAY 04</span>
            </div>
            <div className={styles.call}>
              <div className={styles.avatar} data-figma-asset-pending="56:992" />
              <p className={styles.callName}>Elena Marsh</p>
              <p className={styles.callStatus}>Verified match</p>
              <p className={styles.callTimer}>12:07</p>
              <div className={styles.controls} data-figma-asset-pending="56:996" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        {FEATURES.map((feature) => (
          <div key={feature.title} className={styles.featureRow}>
            {feature.visualFirst ? (
              <>
                <div className={styles.featureVisual} data-figma-asset-pending={feature.diagramId}>
                  {feature.diagram}
                </div>
                <div className={styles.featureCopy}>
                  <p className={styles.featureTitle}>{feature.title}</p>
                  <p className={styles.featureBody}>{feature.body}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.featureCopy}>
                  <p className={styles.featureTitle}>{feature.title}</p>
                  <p className={styles.featureBody}>{feature.body}</p>
                </div>
                <div className={styles.featureVisual} data-figma-asset-pending={feature.diagramId}>
                  {feature.diagram}
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <section className={styles.specs}>
        <h2 className={styles.specsHeading}>Specifications</h2>
        <div className={styles.specTable}>
          {SPECS.map((spec) => (
            <div key={spec.label} className={styles.specRow}>
              <span className={styles.specLabel}>{spec.label}</span>
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.requirementsWrap}>
        <div className={styles.requirements}>
          <p className={styles.requirementsEyebrow}>REQUIREMENTS</p>
          <p className={styles.requirementsBody}>
            iOS 19 or later, Android 16 or later. Active relay coverage at both ends. Parallel will not open a channel
            from a dead zone, and will not queue voice or video.
          </p>
        </div>
      </div>

      <section className={styles.classification}>
        <p className={styles.classificationEyebrow}>CLASSIFICATION</p>
        <h2 className={styles.classificationHeadline}>How close is close.</h2>
        <p className={styles.classificationBody}>
          Two realities that diverged recently produce a twin almost indistinguishable from you. Two that diverged a
          long time ago produce someone who shares your face and very little else. The percentage is a measure of
          drift, not of compatibility.
        </p>
        <div className={styles.twinList}>
          {TWINS.map((twin) => (
            <div key={twin.id} className={styles.twinRow}>
              <span className={styles.twinId}>{twin.id}</span>
              <span className={styles.twinName}>{twin.name}</span>
              <span className={styles.twinClass} style={{ color: twin.color }}>
                {twin.classification}
              </span>
              <span className={styles.twinPercent}>{twin.percent}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.exchange}>
        <p className={styles.exchangeEyebrow}>EXCHANGE</p>
        <h2 className={styles.exchangeHeadline}>Fifteen minutes.</h2>
        <p className={styles.exchangeBody}>
          After enough contact, a twin&apos;s profile offers an exchange. If you both agree, you spend fifteen
          minutes on the other side. Either of you can end it early. Neither of you can extend it.
        </p>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              <p className={styles.stepNumber}>{step.number}</p>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.related}>
        <h2 className={styles.relatedHeading}>Also inside Parallel</h2>
        <div className={styles.relatedRow}>
          {RELATED.map((card, i) => (
            <div key={i} className={styles.relatedCard}>
              <p className={styles.relatedTitle}>{card.title}</p>
              <p className={styles.relatedBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
