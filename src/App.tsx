import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { AppThemeProvider } from "./pages/shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </AppThemeProvider>
  );
};
