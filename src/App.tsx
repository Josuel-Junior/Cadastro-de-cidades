import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { AppThemeProvider } from "./pages/shared/contexts/ThemeContext";
import { MenuLateral } from "./pages/shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
