import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dasboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página Inicial"
      barraDeFerramentas={<FerramentasDaListagem mostrarInputBusca textoBotaoNovo="nova"/>}
    >
      testando
    </LayoutBaseDePagina>
  );
};
