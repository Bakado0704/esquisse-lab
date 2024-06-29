import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/firestore/work.types';
import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';
import { Submit } from '@/types/form/Submit.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: EsquisseFormValue;
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
