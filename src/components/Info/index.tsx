import Image from "next/image";

import comparativo from "../../../public/comparativo_img_CTA.png";
import noCard from "../../../public/no-card-dark.webp";
import estrelas from "../../../public/rating.webp";
import selo from "../../../public/selo_RD.png";
import styles from "./info.module.css";

export function Info() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.imgComparativo}
        src={comparativo}
        alt="imagem demonstrativo"
      />
      <div>
        <h1>
          Pronto para triplicar sua <br />
          <span style={{ fontWeight: "bold" }}>Geração de Leads?</span>
        </h1>
        <h3>
          Criação e ativação em
          <span style={{ fontWeight: "bold" }}> 4 minutos</span>
        </h3>

        <div className={styles.divider} />
        <div className={styles.demonstração}>
          <button>VER DEMONSTRAÇÃO</button>
          <Image
            className={styles.imgSelo}
            src={selo}
            alt="selo de qualidade"
          />
        </div>

        <div className={styles.noCard}>
          <Image src={noCard} alt="no credit card" />
          <p>
            <span style={{ fontWeight: "bold" }}>Não</span> é necessario cartão
            de credito
          </p>
          <p>|</p>
          <Image src={estrelas} alt="rating" />
          <p>
            <span style={{ fontWeight: "bold" }}>4,9</span>/5 média de
            satisfação
          </p>
        </div>
      </div>
    </main>
  );
}
