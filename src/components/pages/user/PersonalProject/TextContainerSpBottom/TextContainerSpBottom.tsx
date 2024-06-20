import { FlexBox, Typography } from '@/components/common';

import styles from './TextContainerSpBottom.module.scss';

const TextContainerSpBottom = () => {
  return (
    <FlexBox justifyContent='center' className={styles.container}>
      <Typography
        fontSize='1.2rem'
        color='w1'
        textAlign='center'
        lineHeight='150%'
      >
        建築学科のオンラインのエスキスサービスです。
        <br />
        オンライン上で設計課題のエスキスができます。
        <br />
        完成品ではなく、過程を投稿することによって、作品の移り変わりが記録されるようになっており、
        <br />
        「他の人の作品制作の過程が知りたい」「先輩TAと作品について議論したい」という課題を解決します。
      </Typography>
    </FlexBox>
  );
};

export default TextContainerSpBottom;
