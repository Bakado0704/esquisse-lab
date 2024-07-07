import Image from 'next/image';
import { useRouter } from 'next/navigation';

import fvImg from '@/assets/fv/fv.png';
import { Button, FlexBox, Icon, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './Fv.module.scss';

const Fv = () => {
  const router = useRouter();
  useFadeIn({ targetId: 'fvImg', styles });
  useFadeIn({ targetId: 'fvTitle', styles });

  return (
    <FlexBox id='fv' className={styles.container}>
      <FlexBox className={styles.containerInner}>
        <FlexBox id='fvImg' className={styles.imageContainer}>
          <Image alt='fv' fill src={fvImg} className={styles.image} />
        </FlexBox>
      </FlexBox>
      <FlexBox flexDirection='column' justifyContent='center' gap='2.4rem'>
        <FlexBox
          id='fvTitle'
          flexDirection='column'
          className={styles.titleContainer}
        >
          <Typography gothic color='w1' className={styles.title}>
            Hokudai
            <br />
            Esquisse
            <br />
            Forum
          </Typography>
          <Icon iconName='arrowLarge' />
        </FlexBox>
        <Button
          theme='rectPink'
          size='large'
          className={styles.button}
          onClick={() => router.push('/work/new')}
        >
          投稿する
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
export default Fv;
