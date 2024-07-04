import { User } from '@/types/firestore/user.types';
import { UserSubmit } from '@/types/form/Submit.types';
import { UserFormValue } from '@/types/form/UserForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: UserFormValue;
}): UserSubmit => {
  const { id, name, lab, coverImageUrl, iconImageUrl, detail, workIds } =
    formData;

  const userObj: User = {
    id,
    name,
    lab,
    coverImageUrl,
    iconImageUrl,
    detail,
    workIds,
  };

  return { userObj };
};
