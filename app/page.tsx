import styles from "./page.module.css";
import ServerComponent from "../components/ServerComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <ServerComponent />
    </main>
  );
}
