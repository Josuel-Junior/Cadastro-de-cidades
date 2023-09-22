import { Drawer, useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { IAppThemeProviderProps } from "../../contexts";

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  // theme tem que estar dentro do copor da função
  return (
    <>
      <Drawer variant="permanent">teste</Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
