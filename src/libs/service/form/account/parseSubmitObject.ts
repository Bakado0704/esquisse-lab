import { User } from '@/types/firestore/user.types';
import { AccountFormValue } from '@/types/form/AccountForm.types';
import { UserSubmit } from '@/types/form/Submit.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: AccountFormValue;
}): UserSubmit => {
  const { name, lab } = formData;

  const userObj: User = {
    id: '',
    name,
    lab,
    coverImageUrl: undefined,
    iconImageUrl: undefined,
    detail: '',
    workIds: [],
  };

  return { userObj };
};
