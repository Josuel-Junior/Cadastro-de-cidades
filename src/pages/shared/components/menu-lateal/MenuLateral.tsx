import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import { Box } from "@mui/system";
import { IAppThemeProviderProps, useAppDrawerContext } from "../../contexts";
import useMediaQuery from "@mui/material/useMediaQuery";

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  // theme tem que estar dentro do copor da função
  // acessa os 2 temas do app
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleOpenDrawer } = useAppDrawerContext();
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleOpenDrawer}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          flex="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
