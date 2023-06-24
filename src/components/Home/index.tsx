import styles from "./home.module.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <h3 className={styles.info}>Webinars exclusivos</h3>
      <h2 className={styles.text}>Menos conversinha,</h2>
      <h1 className={styles.text2}>Mais conversão</h1>
      <div className={styles.divider}></div>
      <p className={styles.text3}>
        Conheça as estratégias que <b> mudaram o jogo</b> e como aplica-las no
        seu negocio
      </p>
    </main>
  );
}
