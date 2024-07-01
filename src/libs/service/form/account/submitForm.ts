import { AccountFormValue } from '@/types/form/AccountForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (formData: AccountFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { userObj } = parsedData;

  console.log(userObj);

  // await batchCreate({
  //   esquisseObj,
  //   workObj,
  // });
};
