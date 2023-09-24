import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Icon } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { IAppThemeProviderProps, useAppDrawerContext } from "../../contexts";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
  // pode ser uma funcao ou undefined
}
const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
    //forma de ver se a função e undefined
  };
  return (
    // se a rota foi resolvida -> on click
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  // theme tem que estar dentro do copor da função
  // acessa os 2 temas do app
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleOpenDrawer, drawerOption } =
    useAppDrawerContext();
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleOpenDrawer}
      >
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
              {drawerOption.map((drawerOptions) => (
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  to={drawerOptions.path}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleOpenDrawer : undefined}
                />
              ))}
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
