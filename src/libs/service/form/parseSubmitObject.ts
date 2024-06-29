import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/firestore/work.types';
import { Submit } from '@/types/form/Submit.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: WorkEsquisseFormValue;
}): Submit => {
  const {
    title,
    concept,
    tags,
    date,
    topImage,
    additionalImages,
    subject,
    description,
  } = formData;

  const workId = ''; //contextから取ってくる
  const esquisseId = ''; //contextから取ってくる
  const uid = ''; //contextから取ってくる
  const esquisseIds: string[] = [];

  const workObj: Work = {
    id: workId,
    uid,
    title,
    concept,
    tags,
    esquisseIds,
  };

  const esquisseObj: Esquisse = {
    id: esquisseId,
    workId,
    createdAt: date,
    topImage,
    additionalImages,
    subject,
    description,
  };

  console.log(workObj, esquisseObj);

  return { workObj, esquisseObj };
};
