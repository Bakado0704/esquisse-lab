import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { WorkFormValue } from '@/types/form/WorkForm.types';

export const initialValue: WorkFormValue = {
  workId: '',
  uid: '',
  esquisseIds: [],
  title: '',
  concept: '',
  tags: [],
};

export const FormWorkContext = createContext<{
  formWork: WorkFormValue;
  setFormWork: Dispatch<SetStateAction<WorkFormValue>>;
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
  const [formWork, setFormWork] = useState<WorkFormValue>(initialValue);

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
