import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

const initialValue = '';

export const EsquisseIdContext = createContext<{
  esquisseId: string;
  setEsquisseId: Dispatch<SetStateAction<string>>;
}>({
  esquisseId: initialValue,
  setEsquisseId: () => {},
});

export const useEsquisseIdContext = () => {
  const context = useContext(EsquisseIdContext);

  if (!context) {
    throw new Error(
      'useEsquisseIdContext must be used within a EsquisseIdProvider',
    );
  }

  const initEsquisseId = () => {
    context.setEsquisseId(initialValue);
  };

  return { ...context, initEsquisseId };
};

export const EsquisseIdProvider = ({ children }: { children: ReactNode }) => {
  const [esquisseId, setEsquisseId] = useState<string>(initialValue);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') setEsquisseId('');
  }, [router.pathname]);

  const value = {
    esquisseId,
    setEsquisseId,
  };

  return (
    <EsquisseIdContext.Provider value={value}>
      {children}
    </EsquisseIdContext.Provider>
  );
};
