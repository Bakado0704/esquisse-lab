import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}>({
  loading: false,
  setLoading: () => {},
});

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children?: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
