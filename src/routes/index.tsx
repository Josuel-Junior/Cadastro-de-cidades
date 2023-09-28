import { Routes, Route, Navigate } from "react-router-dom";

import { useAppDrawerContext, useAppThemeContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dasboard } from "../pages";

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext();
  const { setDrawerOption } = useAppDrawerContext();

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
      <Route path="/pagina-inicial" element={<Dasboard />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />

      {/* Se digitar a url errada vai ser redireciando a tela inicial */}
    </Routes>
  );
};
