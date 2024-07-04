import { User } from '@/types/firestore/user.types';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';
import { UserSubmit } from '@/types/form/Submit.types';
import { generateId } from '@/utils/generateId';

export const parseSubmitObject = ({
  formData,
}: {
  formData: RegisterFormValue;
}): UserSubmit => {
  const { name, lab } = formData;

  const userObj: User = {
    id: generateId(),
    name,
    lab,
    coverImageUrl: undefined,
    iconImageUrl: undefined,
    detail: '',
    workIds: [],
  };

  return { userObj };
};
