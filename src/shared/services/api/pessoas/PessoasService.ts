import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
  id: number;
  EMAIL: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetalhePessoa {
  id: number;
  EMAIL: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomecompleto_like${filter}`;
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }
    return new Error("Erro ao listrar os registros");
  } catch (error) {
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao listrar os registros"
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {

  try {
   
    const { data } = await Api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }
    return new Error("Erro ao consultar o registros");
  } catch (error) {
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao consultar o registros"
    );
  }

};
const create = async (dados: Omit<IDetalhePessoa, "id">): Promise<number | Error> => {
  // Com Omit o ID deixar de ser obrigatorio  

  try {
  //  Pra onde vai | quais são os dados
    const { data } = await Api.post<IDetalhePessoa>("/pessoas",dados);

    if (data) {
      // retorna apenas o id 
      return data.id;
    }
    return new Error("Erro ao criar o registro");
  } catch (error) {
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao criar o registro"
    );
  }
};
const updateById = async (id: number, dados:IDetalhePessoa): Promise<void | Error> => {
  try {
    await Api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao atualizar o registro"
    );
  }

};
const deleteById = async (id:number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao deletar o registro"
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
