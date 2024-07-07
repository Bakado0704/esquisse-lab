import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { Esquisse } from '@/types/application/esquisse.types';

const initialValue: Esquisse[] = [];

export const EsquisseContext = createContext<{
  esquisses: Esquisse[];
  setEsquisses: Dispatch<SetStateAction<Esquisse[]>>;
}>({
  esquisses: initialValue,
  setEsquisses: () => {},
});

export const useEsquisseContext = () => {
  const context = useContext(EsquisseContext);

  if (!context) {
    throw new Error(
      'useEsquisseContext must be used within a EsquisseProvider',
    );
  }

  const initEsquisses = () => {
    context.setEsquisses(initialValue);
  };

  return { ...context, initEsquisses };
};

export const EsquissesProvider = ({ children }: { children: ReactNode }) => {
  const [esquisses, setEsquisses] = useState<Esquisse[]>(initialValue);

  const value = {
    esquisses,
    setEsquisses,
  };

  return (
    <EsquisseContext.Provider value={value}>
      {children}
    </EsquisseContext.Provider>
  );
};
