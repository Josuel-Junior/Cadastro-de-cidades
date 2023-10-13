import { TextField, TextFieldProps } from "@mui/material";
import {useField} from "@unform/core";

// todos os props de Text Field mais " & " name 
type TVTextFieldProps = TextFieldProps & {
    name: string;
}
export const VtextFiel: React.FC <TVTextFieldProps> = ({name,...rest}) => {

  const {fieldName,registerField,defaultValue,error,clearError} = useField(name);

  
  return(
    <TextField {...rest}/>
  );
};