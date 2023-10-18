import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetalhePessoa {
  id: number;
  email: string;
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
    const urlRelativa = `http://localhost:3333/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    // console.log(filter);
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
    // console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao listrar os registros"
    );
  }
};



const getById = async (id: number): Promise<IDetalhePessoa | Error> => {

  try {
   
    const { data } = await Api.get(`http://localhost:3333/pessoas/${id}`);

    

    if (data) {
      return data;
    }
    return new Error("Erro ao consultar o registros");
  } catch (error) {
    console.log("data erro");
    console.error(error);
    return new Error(
      // O tipo é objeto
      (error as { message: string }).message || "Erro ao consultar o registros"
    );
  }

};
const create = async (dados: Omit<IDetalhePessoa, "id">): Promise<number | Error> => {
  // Com Omit o ID deixa de ser obrigatorio  

  try {
  //  Pra onde vai | quais são os dados
    const { data } = await Api.post<IDetalhePessoa>("http://localhost:3333/pessoas",dados);

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
    await Api.put(`http://localhost:3333/pessoas/${id}`, dados);
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
    await Api.delete(`http://localhost:3333/pessoas/${id}`);
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
