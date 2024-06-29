import { Dispatch, SetStateAction } from 'react';

import { ImageDatumsType } from '@/types/form/EsquisseForm.types';

export type EsquisseFormAdviseUnitProps = {
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};
