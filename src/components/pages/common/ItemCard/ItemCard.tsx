import { format } from 'date-fns';
import Image from 'next/image';

import { FlexBox, Typography } from '@/components/common';

import { useItemCard } from './ItemCard.hooks';
import styles from './ItemCard.module.scss';
import { ItemCardProps } from './ItemCard.types';
import { PostIcon } from './PostIcon';

const ItemCard = ({
  workId,
  userId,
  subject,
  esquisseId,
  transitionDelay,
}: ItemCardProps) => {
  const { createdAt, iconImageUrl, imageUrl, userName, handleItemCard } =
    useItemCard({
      workId,
      userId,
      esquisseId,
    });

  return (
    <FlexBox
      flexDirection='column'
      className={styles.card}
      transitionDelay={transitionDelay}
      onClick={handleItemCard}
    >
      <FlexBox alignItems='flex-end' className={styles.imageContainer}>
        {imageUrl ? (
          <Image fill src={imageUrl} alt='cardImage' className={styles.image} />
        ) : (
          <FlexBox
            justifyContent='center'
            alignItems='center'
            className={styles.noImage}
          >
            <Typography gothic color='b3' className={styles.noImageText}>
              NoImage
            </Typography>
          </FlexBox>
        )}
        <Typography color='w1' fontSize='1.2rem'>
          {format(createdAt, 'yyyy.MM.dd')}
        </Typography>
      </FlexBox>
      <FlexBox
        flexDirection='column'
        gap='0.8rem'
        className={styles.cardDetailContainer}
      >
        <Typography ellipsis fontSize='1.4rem' fontWeight={600}>
          {subject}
        </Typography>
        <FlexBox gap='0.8rem' alignItems='center'>
          <PostIcon iconImageUrl={iconImageUrl} />
          <Typography fontSize='1.2rem'>{userName}</Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ItemCard;
