import { Work } from '@/types/firestore/work.types';
import { WorkSubmit } from '@/types/form/Submit.types';
import { WorkFormValue } from '@/types/form/WorkForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: WorkFormValue;
}): WorkSubmit => {
  const { title, concept, tags, workId, uid, esquisseIds } = formData;

  const workObj: Work = {
    id: workId,
    uid,
    title,
    concept,
    tags,
    esquisseIds,
  };

  console.log(workObj);

  return { workObj };
};
