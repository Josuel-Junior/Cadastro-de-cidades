import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAppDrawerContext, useAppThemeContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext();
  const { toggleOpenDrawer, setDrawerOption } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: "home",
        path: "/pagina-inicial",
        label: "Pagina-inicial",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleOpenDrawer}
          >
            Toogle Theme
          </Button>
        }
      />
      {/* <Route path="*" element={<Navigate to="/pagina-inicial" />} /> */}

      {/* Se digitar a url errada vai ser redireciando a tela inicial */}
    </Routes>
  );
};
