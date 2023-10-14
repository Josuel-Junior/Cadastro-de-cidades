import {useEffect, useState, useRef} from "react";

import { useParams,useNavigate } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { Form } from "@unform/web";

import { VtextFiel } from "../../shared/forms";
import { FormHandles } from "@unform/core";


interface IFormData{
  email: string;
  cidadeId: string;
  nomeComplete: string;
}


export const DetalheDePessoas: React.FC = () => {

  const {id = "nova"} = useParams<"id">();
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

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

  const handleSave = (dados: IFormData) => {
    console.log(dados);
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

          aoClicarEmVoltar={()=>navigate("/pessoas")}
          aoClicarEmApagar={()=>handleDelete(Number(id))}
          aoClicarEmNovo={()=>navigate("/pessoas/detalhe/nova")}
          aoClicarEmSalvar={()=>formRef.current?.submitForm()}
          aoClicarEmSalvarEFechar={()=>formRef.current?.submitForm()}
        />
      }
    >
     

      <Form ref={formRef} onSubmit={handleSave}>

        <VtextFiel name="NomeCompleto"/>
        <VtextFiel name="email"/>
        <VtextFiel name="cidadeId"/>

        <button type="submit">Submit</button>
      </Form>
      
    </LayoutBaseDePagina>
  );
  
};
