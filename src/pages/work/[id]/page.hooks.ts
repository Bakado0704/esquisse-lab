import { useEffect, useState } from 'react';

import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { useModalImageContext } from '@/contexts/image.context';
import { useMemberContext } from '@/contexts/member.context';
import { getSelectedEsquisses } from '@/libs/service/firestore/esquisse';
import { getWork } from '@/libs/service/firestore/work';
import { getTopImage } from '@/libs/service/topImage';

type ImageSize = {
  width: number;
  height: number;
};

export const usePage = ({ workId }: { workId: string }) => {
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();
  const { setEsquisses } = useEsquisseContext();
  const { modalImage, setModalImage } = useModalImageContext();
  const [imgUrl, setImgUrl] = useState<string>();

  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });

  const loadImage = (imgUrl: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });

  useEffect(() => {
    const updateImageSize = async () => {
      if (modalImage) {
        try {
          const image = await loadImage(modalImage);
          const aspectRatio = image.width / image.height;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          let width, height;

          if (windowWidth / windowHeight > aspectRatio) {
            height = windowHeight;
            width = height * aspectRatio;
          } else {
            width = windowWidth;
            height = width / aspectRatio;
          }

          setImageSize({ width, height });
        } catch (error) {
          console.error('Error loading images:', error);
        }
      }
    };

    updateImageSize();

    window.addEventListener('resize', updateImageSize);
    return () => window.removeEventListener('resize', updateImageSize);
  }, [modalImage]);

  const onClose = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImgUrl = await getTopImage({ workId });
      const fetchedWork = await getWork({ workId });
      const fetchedEsquisses = await getSelectedEsquisses({ workId });

      setImgUrl(fetchedImgUrl);
      setEsquisses(fetchedEsquisses);
      setMembers([]);
      if (fetchedWork) {
        setFormWork({
          workId: fetchedWork.id,
          uid: fetchedWork.uid,
          esquisseIds: fetchedWork.esquisseIds,
          title: fetchedWork.title,
          concept: fetchedWork.concept,
          tags: fetchedWork.tags,
        });
      }
    };

    fetchData();
  }, [workId, setFormWork, setMembers]);

  return {
    imgUrl,
    imageSize,
    modalImage,
    onClose,
  };
};
