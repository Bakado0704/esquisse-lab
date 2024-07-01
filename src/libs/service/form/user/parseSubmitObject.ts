import { User } from '@/types/application/user.types';
import { UserSubmit } from '@/types/form/Submit.types';
import { UserFormValue } from '@/types/form/UserForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: UserFormValue;
}): UserSubmit => {
  const { id, name, lab, workIds, coverImageUrl, iconImageUrl, detail } =
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

  console.log(userObj);

  return { userObj };
};
