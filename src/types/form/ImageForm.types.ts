export type ImgSizeType = {
  width: number;
  height: number;
};

export type ImageType = {
  objectUrl: string;
  imgSize: ImgSizeType;
};

export type ImageDataType = {
  file?: File;
  objectUrl: string;
  imgSize: { width: number; height: number };
};

export type ImageDatumsType = ImageDataType[];
