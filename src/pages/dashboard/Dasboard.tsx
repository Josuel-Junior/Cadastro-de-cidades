import {
  FerramentasDaListagem,
  FerramentasDeDetalhe,
} from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dasboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página Inicial"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={false}
        />
      }
    >
      testando
    </LayoutBaseDePagina>
  );
};
