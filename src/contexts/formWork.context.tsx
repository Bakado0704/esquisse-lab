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

import { WorkFormValue } from '@/types/form/WorkForm.types';

export const initialValue = null;

export const FormWorkContext = createContext<{
  formWork: WorkFormValue | null;
  setFormWork: Dispatch<SetStateAction<WorkFormValue | null>>;
}>({
  formWork: initialValue,
  setFormWork: () => {},
});

export const useFormWorkContext = () => {
  const context = useContext(FormWorkContext);

  const initFormWork = () => {
    context.setFormWork(initialValue);
  };

  return { ...context, initFormWork };
};

export const FormWorkProvider = ({ children }: { children: ReactNode }) => {
  const [formWork, setFormWork] = useState<WorkFormValue | null>(initialValue);
  const router = useRouter();

  const value = {
    formWork,
    setFormWork,
  };

  useEffect(() => {
    if (router.pathname === '/home') setFormWork(null);
  }, [router.pathname]);

  return (
    <FormWorkContext.Provider value={value}>
      {children}
    </FormWorkContext.Provider>
  );
};
