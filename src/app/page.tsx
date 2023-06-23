import { Header } from "@/components/Header";
import { HomePage } from "@/components/Home";

import RootLayout from "./layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <Header />
        <HomePage />
      </main>
    </RootLayout>
  );
}
