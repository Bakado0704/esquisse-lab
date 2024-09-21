import { format } from 'date-fns';

import { FlexBox, NextImage, Separator, Typography } from '@/components/common';
import { UserIcon } from '@/components/pages/common/UserIcon';

import { usePostItem } from './PostItem.hooks';
import styles from './PostItem.module.scss';
import { PostItemProps } from './PostItem.types';

const PostItem = ({ post }: PostItemProps) => {
  const { userName, iconSize, handlePost } = usePostItem({
    userId: post.userId,
  });

  return (
    <FlexBox
      flexDirection='column'
      className={styles.post}
      onClick={() =>
        handlePost({
          esquisseId: post.id,
          workId: post.workId,
        })
      }
    >
      <FlexBox className={styles.imageContainer}>
        {post.imageUrl ? (
          <NextImage id={post.id} src={post.imageUrl} alt='post' />
        ) : (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className={styles.image}
          >
            <Typography gothic color='b3' className={styles.noImage}>
              NoImage
            </Typography>
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox flexDirection='column' className={styles.detailContainer}>
        <FlexBox gap='1.6rem' alignItems='center'>
          <UserIcon
            iconImageUrl={post.iconImageUrl}
            isRouterActive={false}
            href=''
            size={iconSize}
          />
          <FlexBox
            flexDirection='column'
            gap='0.8rem'
            className={styles.detail}
          >
            <Typography fontSize='1.2rem' color='b2'>
              {format(post.createdAt, 'yyyy年M月d日')}
            </Typography>
            <Typography fontSize='1.2rem' color='b2'>
              {userName}
            </Typography>
          </FlexBox>
        </FlexBox>
        <Typography
          fontWeight={600}
          lineHeight='150%'
          ellipsis
          className={styles.subject}
        >
          {post.subject}
        </Typography>
        <Typography ellipsis className={styles.description}>
          {post.description}
        </Typography>
      </FlexBox>
      <Separator direction='horizontal' />
    </FlexBox>
  );
};

export default PostItem;
