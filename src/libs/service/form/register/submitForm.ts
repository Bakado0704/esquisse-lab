import { RegisterFormValue } from '@/types/form/RegisterForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: RegisterFormValue,
): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { userObj } = parsedData;

  console.log(userObj);

  // await batchCreate({
  //   userObj,
  // });
};
