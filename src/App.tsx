import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
};
