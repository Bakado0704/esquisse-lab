import { FlexBox, Typography } from '@/components/common';

import styles from './TextContainerSpTop.module.scss';

const TextContainerSpTop = () => {
  return (
    <FlexBox flexDirection='column' gap='0.8rem' className={styles.container}>
      <Typography
        fontSize='1.6rem'
        fontWeight={600}
        color='w1'
        textAlign='center'
      >
        個人開発
      </Typography>
      <Typography gothic fontSize='3.2rem' color='w1' textAlign='center'>
        EsquisseLab
      </Typography>
    </FlexBox>
  );
};

export default TextContainerSpTop;
