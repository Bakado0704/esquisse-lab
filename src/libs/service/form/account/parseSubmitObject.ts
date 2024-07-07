import { AccountFormValue } from '@/types/form/AccountForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: AccountFormValue;
}): AccountFormValue => {
  const { email, password1, password2 } = formData;

  const accountObj: AccountFormValue = {
    email,
    password1,
    password2,
  };

  return accountObj;
};
