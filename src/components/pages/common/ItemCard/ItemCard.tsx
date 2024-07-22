import { format } from 'date-fns';
import Image from 'next/image';

import { FlexBox, Typography } from '@/components/common';

import { UserIcon } from '../UserIcon';

import { useItemCard } from './ItemCard.hooks';
import styles from './ItemCard.module.scss';
import { ItemCardProps } from './ItemCard.types';

const ItemCard = ({
  workId,
  userId,
  subject,
  esquisseId,
  imageUrl,
  transitionDelay,
  type = 'archi',
}: ItemCardProps) => {
  const { createdAt, iconImageUrl, url, userName, handleItemCard } =
    useItemCard({
      workId,
      userId,
      esquisseId,
      type,
      imageUrl,
    });

  return (
    <FlexBox transitionDelay={transitionDelay} className={styles.cardContainer}>
      <div className={styles.card} onClick={handleItemCard}>
        <FlexBox alignItems='flex-end' className={styles.imageContainer}>
          {url ? (
            <Image fill src={url} alt='cardImage' className={styles.image} />
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
            {format(createdAt, 'yyyy.M.d')}
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
            <UserIcon
              iconImageUrl={iconImageUrl}
              size='3rem'
              isRouterActive={false}
              href=''
            />
            <Typography fontSize='1.2rem'>{userName}</Typography>
          </FlexBox>
        </FlexBox>
      </div>
    </FlexBox>
  );
};

export default ItemCard;
