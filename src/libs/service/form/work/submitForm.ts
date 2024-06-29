import { Work } from '@/types/application/work.types';
import { WorkFormValue } from '@/types/form/WorkForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: WorkFormValue,
): Promise<Work['id']> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { workObj } = parsedData;

  // await batchUpdate({
  //   esquisseObj,
  //   workObj,
  // });

  return workObj.id;
};
