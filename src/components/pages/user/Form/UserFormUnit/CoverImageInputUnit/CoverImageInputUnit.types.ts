import { Dispatch, SetStateAction } from 'react';

import { ImageType } from '@/types/form/ImageForm.types';

export type CoverImageInputUnitProps = {
  coverImageData: ImageType | undefined;
  setCoverImageData: Dispatch<SetStateAction<ImageType | undefined>>;
};
