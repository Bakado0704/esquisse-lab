import { uploadImageToStorage } from '../repository/storage';

const MAX_WIDTH = 1440;

export const uploadImageFile = async ({
  imageDatum,
}: {
  imageDatum: {
    file: File;
    objectUrl: string;
  };
}): Promise<string> => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumber = getRandomInt(1, 1000000);
  const time = new Date().getTime();
  const fileName = `${randomNumber}_${time}.jpeg`;

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageDatum.objectUrl;

    image.onload = async () => {
      try {
        const uploadImageFile = await compressImageFileAndConvertExtension(
          image,
          imageDatum.file,
        );
        const imageURL = await uploadImageToStorage({
          uploadImageFile,
          fileName,
        });

        resolve(imageURL);
      } catch (error) {
        console.error(error);
        reject('画像のアップロードに失敗しました。');
      }
    };

    image.onerror = (error) => {
      console.error(error);
      reject('画像のロードに失敗しました。');
    };
  });
};

const compressImageFileAndConvertExtension = async (
  image: HTMLImageElement,
  imageFile: File,
): Promise<File> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const [imageWidth, imageHeight] = getResizedImageSize(image);
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  if (ctx) {
    ctx.drawImage(image, 0, 0, imageWidth, imageHeight);

    return new Promise((resolve, reject) => {
      const dataURL = canvas.toDataURL('image/jpeg', 0.8);
      fetch(dataURL)
        .then((res) => res.blob())
        .then((blob) => {
          if (blob) {
            const resizedImageFile = new File([blob], imageFile.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(resizedImageFile);
          } else {
            reject('画像のアップロードに失敗しました。');
          }
        });
    });
  } else {
    throw 'デベロッパーモードを解除してください。';
  }
};

const getResizedImageSize = (image: HTMLImageElement): [number, number] => {
  const aspectRatio = image.height / image.width;
  const resizedWidth = image.width > MAX_WIDTH ? MAX_WIDTH : image.width;
  const resizedHeight =
    image.width > MAX_WIDTH
      ? Math.round(MAX_WIDTH * aspectRatio)
      : image.height;
  return [resizedWidth, resizedHeight];
};
