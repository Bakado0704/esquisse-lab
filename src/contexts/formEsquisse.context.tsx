import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';

export const initialValue: EsquisseFormValue = {
  date: new Date(),
  topImage: null,
  additionalImages: [],
  subject: '',
  description: '',
};

export const FormEsquisseContext = createContext<{
  formEsquisse: EsquisseFormValue;
  setFormEsquisse: Dispatch<SetStateAction<EsquisseFormValue>>;
}>({
  formEsquisse: initialValue,
  setFormEsquisse: () => {},
});

export const useFormEsquisseContext = () => {
  const context = useContext(FormEsquisseContext);

  const initFormEsquisse = () => {
    context.setFormEsquisse(initialValue);
  };

  return { ...context, initFormEsquisse };
};

export const FormEsquisseProvider = ({ children }: { children: ReactNode }) => {
  const [formEsquisse, setFormEsquisse] =
    useState<EsquisseFormValue>(initialValue);

  const value = {
    formEsquisse,
    setFormEsquisse,
  };

  return (
    <FormEsquisseContext.Provider value={value}>
      {children}
    </FormEsquisseContext.Provider>
  );
};
