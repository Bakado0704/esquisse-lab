import { Dispatch, SetStateAction } from 'react';

import { ImageDatumsType } from '@/types/form/EsquisseForm.types';

export type ImageInputUnitProps = {
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};
