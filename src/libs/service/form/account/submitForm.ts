import { AccountFormValue } from '@/types/form/AccountForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (formData: AccountFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const email = parsedData;

  console.log(email);

  // await batchCreate({
  //   esquisseObj,
  //   workObj,
  // });
};
