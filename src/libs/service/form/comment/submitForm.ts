import { CommentFormValue } from '@/types/form/CommentForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (formData: CommentFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const comment = parsedData;

  console.log(comment);

  // await batchCreate({
  //   esquisseObj,
  //   workObj,
  // });
};
