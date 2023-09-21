import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./pages/shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </ThemeProvider>
  );
};
