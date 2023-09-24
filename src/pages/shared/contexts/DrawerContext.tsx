import { createContext, useState, useCallback, useContext } from "react";

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}
interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOption: IDrawerOption[];
  toggleOpenDrawer: () => void;
  setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void
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
  const [drawerOption, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleOpenDrawer = useCallback(() => {
    setIsDrawerOpen((oldDeawerOpen) => !oldDeawerOpen);
    //  atual -> inverte por conta da negação
  }, []);
  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
    //  atual -> inverte por conta da negação
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOption, toggleOpenDrawer, setDrawerOption: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
