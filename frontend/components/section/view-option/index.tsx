import styles from "./index.module.css";

export default function ViewOptionSection() {
  return (
    <div className={styles.layout}>
      <button className={styles.filter}>filter</button>
      <button className={styles.view}>view</button>
    </div>
  );
}
