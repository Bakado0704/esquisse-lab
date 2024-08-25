import { Dispatch, SetStateAction } from 'react';

import { ImageDatumsType } from '@/types/form/ImageForm.types';

export type EsquisseFormAdviseUnitProps = {
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate';
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};
