import styles from "./main.module.css";
import TypeCursos from "./TypeCursos";

export function MainPage() {
  return (
    <main className={styles.main}>
      <TypeCursos />
    </main>
  );
}
