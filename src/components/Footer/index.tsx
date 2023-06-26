import Image from "next/image";

import logo from "../../../public/logo.png";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.main}>
      <div>
        <Image src={logo} alt="logo Leads" />
        <p>Transformando visitantes em clientes</p>
      </div>
      <div className={styles.menu}>
        <div>
          <h2>Links Principais</h2>
          <ul>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preço</li>
            <li>Contato</li>
          </ul>
        </div>
        <div>
          <h2>Cases</h2>
          <ul>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Sofware</li>
            <li>Geração de Leads em Imobiliária</li>
            <li>Cases de Sucesso</li>
          </ul>
        </div>
        <div>
          <h2>Materiais</h2>
          <ul>
            <li>Blog</li>
            <li>Parceria com Agências</li>
            <li>Guia Definitivo do Marketing</li>
            <li>Materiais Gratuitos</li>
          </ul>
        </div>

        <div>
          <h2>Siga a Leadster</h2>
          <div>logos</div>
          <div>
            <h3>Email:</h3>
            <a>contato@leadster.com.br</a>
          </div>
          <div>
            <h3>Telefone:</h3>
            <a>(42) 98828-9851</a>
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <div>
        <h3>Copyrghit 2015 - 2022 Todos os direitos reservados | Leadster</h3>
        <h3>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          TERMOS DE USO
        </h3>
      </div>
    </div>
  );
}
