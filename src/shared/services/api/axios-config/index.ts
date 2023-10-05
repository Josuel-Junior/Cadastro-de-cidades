import axios from "axios";
import { responseInterceptor, errorInterceptor } from "./interceptiors";
import { Environment } from "../../../environment";



//   PARAM OBRIGATORIO
const Api = axios.create({ baseURL: Environment.LISTAGEM_VAZIA });



Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);


export {Api};