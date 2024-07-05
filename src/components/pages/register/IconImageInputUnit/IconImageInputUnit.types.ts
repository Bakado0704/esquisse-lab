import { Dispatch, SetStateAction } from 'react';

import { ImageType } from '@/types/form/ImageForm.types';

export type IconImageInputUnitProps = {
  iconImageData: ImageType | undefined;
  setIconImageData: Dispatch<SetStateAction<ImageType | undefined>>;
};
