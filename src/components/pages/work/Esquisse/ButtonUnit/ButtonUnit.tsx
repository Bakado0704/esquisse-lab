import { useRouter } from 'next/navigation';

import { FlexBox, Typography } from '@/components/common';

import styles from './ButtonUnit.module.scss';

const ButtonUnit = () => {
  const router = useRouter();
  const onCreateEsquisse = () => {
    router.push(`/work/esquisse/new`);
  };

  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <FlexBox className={styles.lineContainer}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </FlexBox>
      <FlexBox flexDirection='column' gap='1.2rem'>
        <FlexBox justifyContent='center'>
          <button className={styles.button} onClick={onCreateEsquisse}>
            <span />
            <span />
          </button>
        </FlexBox>
        <FlexBox justifyContent='center'>
          <Typography color='b3' fontSize='1.6rem'>
            エスキスを新規作成
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ButtonUnit;
