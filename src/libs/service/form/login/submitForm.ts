import { LoginFormValue } from '@/types/form/LoginForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (formData: LoginFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { email, password } = parsedData;

  console.log(email);
  console.log(password);

  // await batchCreate({
  //   esquisseObj,
  //   workObj,
  // });
};
