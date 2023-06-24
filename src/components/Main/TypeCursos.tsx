"use client";
import { useEffect, useState } from "react";

import { ApiCurso, CursoProps } from "@/api/ApiCurso";

import styles from "./main.module.css";

export default function TypeCursos() {
  const [data, setData] = useState<CursoProps[]>([]);

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

  console.log(data);

  return (
    <main>
      <div className={styles.displayButton}>
        {data.map(r => {
          return (
            <button key={r.id} className={styles.button}>
              <p>{r.tipo}</p>
            </button>
          );
        })}
      </div>
      <div className="divider" />
    </main>
  );
}
