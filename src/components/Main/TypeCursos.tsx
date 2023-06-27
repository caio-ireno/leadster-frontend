"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineCloudDownload } from "react-icons/ai";
import ReactPaginate from "react-paginate";

import { ApiCurso, CursoProps, ListaVideoProps } from "@/api/ApiCurso";

import thumbnail from "../../../public/thumbnail.png";
import video from "../../../public/video_capa.jpg";
import styles from "./main.module.css";

export default function TypeCursos() {
  const [data, setData] = useState<CursoProps[]>([]);
  const [buttonData, setButtonData] = useState(1);
  const [curso, setCurso] = useState<ListaVideoProps>();
  const [dataVideo, setDataVideo] = useState<CursoProps>();
  const itemsPerPage = 6; // Define o número de itens por página
  const [itemOffset, setItemOffset] = useState(0); // Estado para controlar o deslocamento (offset) dos itens
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };

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

  const totalItems = dataVideo?.curso.length;
  let totalPages;
  if (totalItems === undefined) {
    totalPages = 0; // Número total de páginass
  } else {
    totalPages = Math.ceil(totalItems / itemsPerPage); // Número total de páginass
  }

  const handlePageChange = ({ selected }: { selected: number }) => {
    const offset = selected * itemsPerPage; // Calcula o novo deslocamento (offset) com base na página selecionada
    setItemOffset(offset); // Atualiza o estado do deslocamento (offset) dos itens
  };
  const currentPageItems = dataVideo?.curso.slice(
    itemOffset,
    itemOffset + itemsPerPage,
  );

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
        {currentPageItems?.map(video => {
          return (
            <div
              onClick={() => {
                openModal();
                setCurso(video);
              }}
              className={styles.card}
              key={video.id}
            >
              <Image src={thumbnail} alt="img" />
              <h1>{video.nome}</h1>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={styles.paginate}
        activeClassName={styles.paginateActive}
      />

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.iconContainer}>
              <AiOutlineCloseCircle
                className={styles.closeIcon}
                onClick={closeModal}
              />
            </div>
            <h3>
              Webinar <span>{curso?.nome}</span>
            </h3>
            <Image src={video} alt="video " />
            <div className={styles.modalInfo}>
              <h1>Descrição</h1>
              <p>{curso?.descrição}</p>
              <h1>Downloads</h1>
              <div className={styles.modalDownloads}>
                <button className={styles.btGreen}>
                  <AiOutlineCloudDownload />
                  Spreadsheet.xls
                </button>
                <button className={styles.btBlue}>
                  <AiOutlineCloudDownload />
                  Document.doc
                </button>
                <button className={styles.btYellow}>
                  <AiOutlineCloudDownload />
                  Presentation.ppt
                </button>
              </div>
            </div>
            {/* Conteúdo adicional do modal */}
          </div>
        </div>
      )}
    </main>
  );
}
