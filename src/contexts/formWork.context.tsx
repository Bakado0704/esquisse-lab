import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

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

  const value = {
    formWork,
    setFormWork,
  };

  return (
    <FormWorkContext.Provider value={value}>
      {children}
    </FormWorkContext.Provider>
  );
};
