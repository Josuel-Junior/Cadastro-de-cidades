import { useSearchParams } from "react-router-dom";
import { useMemo,useEffect } from "react";


import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC = () => {


  const [searchParams, setSearchParams] = useSearchParams();

  const { debounce } = useDebounce();


  const busca = useMemo(()=>{
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(()=>{

    debounce(()=>{
      PessoasService.getAll(1, busca).then((result)=>{
        if(result instanceof Error){
          alert(result.message);
        }else{
  
          console.log(result);
        }
      });
    });
  },[busca]);
  

 


  return(
    <LayoutBaseDePagina 
      title="Listagem de pessoas" 
      barraDeFerramentas={<FerramentasDaListagem
        textoBotaoNovo="Nova"
        mostrarInputBusca
        textDaBusca={busca} // ?? mesmo que ||
        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
      />}>

    </LayoutBaseDePagina>
  );
};
