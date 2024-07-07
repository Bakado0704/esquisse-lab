import { Dispatch, SetStateAction } from 'react';

import { ImageDatumsType } from '@/types/form/ImageForm.types';

export type ImageInputUnitProps = {
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};
