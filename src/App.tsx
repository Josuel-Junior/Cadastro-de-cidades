import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppDrawerProvider } from "./shared/contexts/DrawerContext";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppDrawerProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppThemeProvider>
    </AppDrawerProvider>
  );
};
