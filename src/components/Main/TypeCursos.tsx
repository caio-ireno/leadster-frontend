"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ApiCurso, CursoProps } from "@/api/ApiCurso";

import thumbnail from "../../../public/thumbnail.png";
import styles from "./main.module.css";

export default function TypeCursos() {
  const [data, setData] = useState<CursoProps[]>([]);
  const [buttonData, setButtonData] = useState(1);
  const [dataVideo, setDataVideo] = useState<CursoProps>();

  useEffect(() => {
    ApiCurso.getCursos()
      .then(result => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setData(result);
        }
      })
      .catch(error => {
        console.error(error);
        alert("Erro ao obter os cursos");
      });
  }, []);

  useEffect(() => {
    data.forEach(value => {
      if (value.id === buttonData) {
        setDataVideo(value);
      }
    });
  }, [data, buttonData]);

  console.log(dataVideo);

  //console.log(dataVideo?.curso);
  return (
    <main>
      <div className={styles.displayButton}>
        {data.map(r => {
          return (
            <button
              key={r.id}
              className={styles.button}
              onClick={() => setButtonData(r.id)}
            >
              <p>{r.tipo}</p>
            </button>
          );
        })}
        <div className={styles.Ordenar}>
          <p>Ordenar por</p>
          <select name="Ordenar" id="Ordenar">
            <option value="Data">Data de Publicação</option>
            <option value="Acessos">Acessos</option>
            <option value="Tamanho">Tamanho</option>
            <option value="Conteúdo">Conteúdo</option>
          </select>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {dataVideo?.curso.map(video => {
          return (
            <div className={styles.card} key={video.id}>
              <Image src={thumbnail} alt="img" />
              <h1>{video.nome}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <h1>Pagina</h1>
      </div>
    </main>
  );
}
