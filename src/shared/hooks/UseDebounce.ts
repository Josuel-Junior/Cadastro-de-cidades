import { useCallback,useRef } from "react";

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime);
  const debouncing = useRef<NodeJS.Timeout>();


  const debounce = useCallback((func: () => void) => {

    if(isFirstTime.current){
    // Iniciou com true -> execute a função e set false
      isFirstTime.current = false; 
      func();
    } else{
    // agora isFirstTime é false então execute a fn com time
      if(debouncing.current){
        clearTimeout(debouncing.current);
        console.log("Referencia inserida no useRef e esvazida");
      }
      console.log("Não possui referencia ainda");
      debouncing.current = setTimeout(() => { func();}, delay);
    }
  }, [delay]);
  return {debounce};
};
