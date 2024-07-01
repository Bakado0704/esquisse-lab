import { Work } from '@/types/application/work.types';
import { UserFormValue } from '@/types/form/UserForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: UserFormValue,
): Promise<Work['id']> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { userObj } = parsedData;

  // await batchUpdate({
  // userObj
  // });

  return userObj.id;
};
