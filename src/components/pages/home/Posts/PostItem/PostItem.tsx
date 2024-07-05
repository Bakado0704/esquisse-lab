import { format } from 'date-fns';

import postImage from '@/assets/fv/fv.png';
import { FlexBox, Separator, Typography } from '@/components/common';
import { NextImage } from '@/components/common/NextImage';

import { PostIcon } from './PostIcon';
import { usePostItem } from './PostItem.hooks';
import styles from './PostItem.module.scss';
import { PostItemProps } from './PostItem.types';

const PostItem = ({ post }: PostItemProps) => {
  const { userName, handlePost } = usePostItem({ userId: post.userId });

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
        <NextImage id={post.id} src={postImage} alt='post' />
      </FlexBox>
      <FlexBox flexDirection='column' className={styles.detailContainer}>
        <FlexBox gap='1.6rem' alignItems='center'>
          <PostIcon iconImageUrl={post.iconImageUrl} />
          <FlexBox
            flexDirection='column'
            gap='0.8rem'
            className={styles.detail}
          >
            <Typography fontSize='1.2rem' color='b2'>
              {format(post.createdAt, 'yyyy年MM月dd日')}
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
