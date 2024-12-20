import { FlexBox, Typography } from '@/components/common';
import { UserIcon } from '@/components/pages/common/UserIcon';

import styles from './TextContainerPc.module.scss';
import { useIconImage } from './useIconImage.hooks';

const TextContainerPc = () => {
  const { iconImageUrl } = useIconImage();

  return (
    <FlexBox flexDirection='column' gap='2rem' className={styles.container}>
      <FlexBox flexDirection='column' gap='0.4rem'>
        <Typography fontSize='1.6rem' fontWeight={600} color='w1'>
          個人開発
        </Typography>
        <Typography gothic fontSize='4.2rem' color='w1'>
          EsquisseLab
        </Typography>
      </FlexBox>
      <Typography fontSize='1.2rem' color='w1' lineHeight='120%'>
        建築学科のオンラインのエスキスサービスです。オンライン上で設計課題のエスキスができます。完成品ではなく、過程を投稿することによって、作品の移り変わりが記録されるようになっており、「他の人の作品制作の過程が知りたい」「先輩TAと作品について議論したい」という課題を解決します。
      </Typography>
      <FlexBox gap='0.8rem' alignItems='center'>
        <UserIcon
          iconImageUrl={iconImageUrl}
          size='3rem'
          isRouterActive={false}
          href=''
        />
        <Typography fontSize='1.2rem' color='w1'>
          Kado Hiroki
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default TextContainerPc;
