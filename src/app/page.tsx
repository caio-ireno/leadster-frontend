import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomePage } from "@/components/Home";
import { Info } from "@/components/Info";
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
        <Info />
        <Footer />
      </main>
    </RootLayout>
  );
}
