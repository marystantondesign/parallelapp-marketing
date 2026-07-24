import styles from "./Ticker.module.css";

const ITEMS = [
  "2,140 RELAYS ACTIVE",
  "GEN 3",
  "COVERAGE 6.4%",
  "MEDIAN LATENCY 180MS",
  "NETWORK OPERATIONAL",
  "ESTD 2026",
];

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      {ITEMS.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
