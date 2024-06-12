import styles from "./page.module.css";
import Something from "../components/Something";

export default function Home() {
  return (
    <main className={styles.main}>
      <Something />
    </main>
  );
}
