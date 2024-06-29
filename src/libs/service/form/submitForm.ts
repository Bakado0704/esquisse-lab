import { Work } from '@/types/application/work.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: WorkEsquisseFormValue,
): Promise<Work['id']> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { esquisseObj, workObj } = parsedData;

  if (esquisseObj.id === '') {
    // await batchUpdate({
    //   esquisseObj,
    //   workObj,
    // });
  } else {
    // await batchCreate({
    //   esquisseObj,
    //   workObj,
    // });
  }

  return workObj.id;
};
