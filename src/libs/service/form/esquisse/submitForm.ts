import {
  batchCreate,
  batchEsquisseCreate,
  batchEsquisseUpdate,
} from '@/libs/repository/batch/esquisse';
import { Work } from '@/types/application/work.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: WorkEsquisseFormValue,
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate',
): Promise<Work['id']> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { esquisseObj, workObj, userObj } = parsedData;
  if (status === 'new') {
    await batchCreate({
      esquisseObj,
      workObj,
      userObj,
    });
  } else if (status === 'esquisseCreate') {
    await batchEsquisseCreate({
      esquisseObj,
      workObj,
    });
  } else {
    await batchEsquisseUpdate({
      esquisseObj,
      workObj,
    });
  }

  return workObj.id;
};
