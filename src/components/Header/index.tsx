import Image from "next/image";

import HeaderImage from "../../../public/logo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <main className={styles.main}>
      <Image src={HeaderImage} alt="logo image" />
    </main>
  );
}
