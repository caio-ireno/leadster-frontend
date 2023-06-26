import Image from "next/image";

import img from "../../../public/comparativo_img_CTA.png";
import styles from "./info.module.css";

export function Info() {
  return (
    <main className={styles.main}>
      <Image src={img} alt="imagem demonstrativo" />
      <div>
        <h1>Pronto para triplicar sua geração de Leads?</h1>
      </div>
    </main>
  );
}
