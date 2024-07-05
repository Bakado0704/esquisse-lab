import { Dispatch, SetStateAction } from 'react';

import { ImageType } from '@/types/form/ImageForm.types';

export type UserFormUnitProps = {
  iconImageData: ImageType | undefined;
  coverImageData: ImageType | undefined;
  setIconImageData: Dispatch<SetStateAction<ImageType | undefined>>;
  setCoverImageData: Dispatch<SetStateAction<ImageType | undefined>>;
};
