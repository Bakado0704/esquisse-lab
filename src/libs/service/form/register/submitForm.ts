import { batchCreate } from '@/libs/repository/batch/user';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: RegisterFormValue,
): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { userObj } = parsedData;

  await batchCreate({
    userObj,
  });
};
