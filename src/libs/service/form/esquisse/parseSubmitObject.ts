import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/firestore/work.types';
import { EsquisseSubmit } from '@/types/form/Submit.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: WorkEsquisseFormValue;
}): EsquisseSubmit => {
  const {
    workId,
    esquisseId,
    esquisseIds,
    uid,
    title,
    concept,
    tags,
    date,
    topImage,
    additionalImages,
    subject,
    description,
  } = formData;

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

  return { workObj, esquisseObj };
};
