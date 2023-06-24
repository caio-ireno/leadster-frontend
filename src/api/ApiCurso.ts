import { Api } from "./axios-confi";
export interface CursoProps {
  id: number;
  tipo: string;
  videos: {
    id: number;
    nome: string;
    img: string;
    url: string;
    cursoId: number;
  };
}

export interface ListaVideoProps {
  id: number;
  nome: string;
  img: string;
  url: string;
  cursoId: number;
}

const getCursos = async (): Promise<CursoProps[]> => {
  try {
    const urlRelativa = "/cursos";
    const { data } = await Api.get(urlRelativa);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      (error as { message: string }).message || "Erro ao Carregar",
    );
  }
};

export const ApiCurso = { getCursos };
