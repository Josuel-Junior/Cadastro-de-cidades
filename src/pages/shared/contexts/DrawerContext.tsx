import { createContext, useState, useCallback, useContext } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleOpenDrawer: () => void;
}
const DrawerContext = createContext({} as IDrawerContextData);

interface IAppDrawerProviderProps {
  children: React.ReactNode;
}

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  // Passando o CHILDREN sempre vai ser preciso passar um filho
  // esse componente é PAI
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleOpenDrawer = useCallback(() => {
    setIsDrawerOpen((oldDeawerOpen) => !oldDeawerOpen);
    //  atual -> inverte por conta da negação
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
