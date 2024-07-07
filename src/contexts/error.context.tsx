import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type ErrorAlert = {
  error: unknown;
  message?: string;
  user?: { uid?: string; email?: string };
};

const ErrorContext = createContext<{
  errorAlert: ErrorAlert;
  setErrorAlert: Dispatch<SetStateAction<ErrorAlert>>;
}>({
  errorAlert: { error: undefined },
  setErrorAlert: () => {},
});

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }: { children?: ReactNode }) => {
  const [errorAlert, setErrorAlert] = useState<ErrorAlert>({
    error: undefined,
  });

  const value = { errorAlert, setErrorAlert };

  useEffect(() => {
    if (errorAlert.error) {
      alert(
        errorAlert.message ??
          'エラーが発生しました。時間を開けて再度お試しください。',
      );
      console.error(errorAlert.error);
    }
  }, [errorAlert]);

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};
