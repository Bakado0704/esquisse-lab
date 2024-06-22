import { useRouter } from 'next/navigation';

import { FlexBox, Icon, Typography } from '@/components/common';

import styles from './TagUnit.module.scss';
import { TagUnitProps } from './TagUnit.types';

const TagUnit = ({ tags }: TagUnitProps) => {
  const router = useRouter();

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox
        justifyContent='center'
        alignItems='center'
        className={styles.iconContainer}
      >
        <Icon iconName='tag' size='1.8rem' />
      </FlexBox>
      <FlexBox
        flexDirection='column'
        gap='0.4rem'
        className={styles.nameContainer}
      >
        <Typography fontSize='1.6rem' fontWeight={600}>
          タグ
        </Typography>
        <FlexBox flexWrap='wrap'>
          {tags.map((tag, index) => {
            return (
              <FlexBox
                key={index}
                onClick={() => router.push(`/posts/${tag}`)}
                className={styles.link}
              >
                {index !== 0 && <Typography>・</Typography>}
                <Typography key={index} fontSize='1.2rem' color='b2'>
                  {tag}
                </Typography>
              </FlexBox>
            );
          })}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default TagUnit;
