import styles from "./PaperThumb.module.css";

type ThumbKind = "waves" | "ring" | "stars";

export default function PaperThumb({ kind, className }: { kind: ThumbKind; className?: string }) {
  return <div className={[styles.thumb, styles[kind], className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
