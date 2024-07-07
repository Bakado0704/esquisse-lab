import { FlexBox, Typography } from '@/components/common';
import { ItemCard } from '@/components/pages/common/ItemCard';
import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './AllPosts.module.scss';
import { AllPostsProps } from './AllPosts.types';

const AllPosts = ({ posts, categoryId }: AllPostsProps) => {
  useFadeIn({ targetId: 'cardContainer', styles });

  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <div className={styles.bg} />
      <FlexBox justifyContent='center'>
        <Typography
          fontWeight={600}
          color='accent1'
          className={styles.postTitle}
        >
          {categoryId.charAt(0)}
        </Typography>
        <Typography fontWeight={600} color='main1' className={styles.postTitle}>
          {categoryId.slice(1)}
        </Typography>
      </FlexBox>
      <FlexBox id='cardContainer' className={styles.cardContainer}>
        {posts.map((post, index) => {
          return (
            <ItemCard
              key={post.id}
              userId={post.userId}
              workId={post.workId}
              imageUrl={post.imageUrl}
              subject={post.subject}
              esquisseId={post.id}
              transitionDelay={`${index * 0.16}s`}
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default AllPosts;
