import {useEffect, useState} from "react";

import { useParams,useNavigate } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

import {LinearProgress} from "@mui/material";



export const DetalheDePessoas: React.FC = () => {

  const {id = "nova"} = useParams<"id">();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(()=>{
    if(id !== "nova"){
      setIsLoading(true);
      PessoasService.getById(Number(id)).then((result)=>{
        setIsLoading(false);
        console.log(id);
        if(result instanceof Error){
          alert(result.message);
          // alert trava a fila de execução
          navigate("/pessoas");
        }else{
          setNome(result.nomeCompleto);
          console.log(result);
        }
      });
    }
  },[id]);

  const handleSave = () => {
    console.log("save");
  };
  const handleDelete = (id: number) => {
    if (confirm("Realmente deseja apagar?")) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Registro apagado com sucesso");
          navigate("/pessoas");
        }
      });
    }
  };
 

  return (

    <LayoutBaseDePagina 
      title={id === "nova" ? "NovaPessoa" : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== "nova"}
          mostrarBotaoApagar={id !== "nova"}

          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={()=>handleDelete(Number(id))}
          aoClicarEmVoltar={()=>navigate("/pessoas")}
          aoClicarEmNovo={()=>navigate("/pessoas/detalhe/nova")}
        />
      }
    >

      {isLoading && (
        <LinearProgress variant="indeterminate"/>
      )}
      <p>DetalheDePessoas {id}</p>
    </LayoutBaseDePagina>
  );
  
};
