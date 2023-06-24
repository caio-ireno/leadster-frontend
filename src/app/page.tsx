import { Header } from "@/components/Header";
import { HomePage } from "@/components/Home";
import { MainPage } from "@/components/Main";

import RootLayout from "./layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <Header />
        <HomePage />
        <MainPage />
      </main>
    </RootLayout>
  );
}
