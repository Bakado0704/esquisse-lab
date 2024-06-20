import Image from 'next/image';
import { useRouter } from 'next/navigation';

import portfolioImg from '@/assets/portfolio/portfolio.png';
import { FlexBox } from '@/components/common';

import styles from './PersonalProject.module.scss';
import { TextContainerPc } from './TextContainerPc';
import { TextContainerSpBottom } from './TextContainerSpBottom';
import { TextContainerSpTop } from './TextContainerSpTop';

const PersonalProject = () => {
  const router = useRouter();

  return (
    <FlexBox className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.bgImg} />
      <TextContainerSpTop />
      <FlexBox
        className={styles.imageContainer}
        onClick={() => router.push('/home')}
      >
        <Image
          src={portfolioImg}
          alt='fv'
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
      </FlexBox>
      <TextContainerPc />
      <TextContainerSpBottom />
    </FlexBox>
  );
};

export default PersonalProject;
