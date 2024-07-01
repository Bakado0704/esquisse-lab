import { AccountFormValue } from '@/types/form/AccountForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: AccountFormValue;
}): string => {
  const { email } = formData;

  return email;
};
