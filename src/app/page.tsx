import { Header } from "@/components/Header";

import RootLayout from "./layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <Header />
      </main>
    </RootLayout>
  );
}
