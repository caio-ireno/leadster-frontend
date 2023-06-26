import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
        <div className={styles.subMenu}>
          <h3>Links Principais</h3>
          <ul>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preço</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className={styles.subMenu}>
          <h3>Cases</h3>
          <ul>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Sofware</li>
            <li>Geração de Leads em Imobiliária</li>
            <li>Cases de Sucesso</li>
          </ul>
        </div>

        <div className={styles.subMenu}>
          <h3>Materiais</h3>
          <ul>
            <li>Blog</li>
            <li>Parceria com Agências</li>
            <li>Guia Definitivo do Marketing</li>
            <li>Materiais Gratuitos</li>
          </ul>
        </div>

        <div className={styles.subMenu}>
          <h3>Siga a Leadster</h3>
          <div>
            <FaLinkedinIn className={styles.logo} />
            <FaFacebookF className={styles.logo} />
            <FaInstagram className={styles.logo} />
          </div>
          <div>
            <p>
              E-mail:{" "}
              <a href="mailto:contato@leadster.com.br">
                contato@leadster.com.br
              </a>
            </p>
          </div>
          <div>
            <p>
              Telefone: <a href="tel:+5542988289851">(42) 98828-9851</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <div className={styles.copy}>
        <h3>
          Copyrghit © 2015 - 2022 Todos os direitos reservados |{" "}
          <span className={styles.leadsterBlue}>Leadster</span>
        </h3>
        <h3>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          TERMOS DE USO
        </h3>
      </div>
    </div>
  );
}
