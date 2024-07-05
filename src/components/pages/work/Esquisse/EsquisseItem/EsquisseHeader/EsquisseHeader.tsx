import classNames from 'classnames';
import { format } from 'date-fns';

import { FlexBox, Icon, Typography } from '@/components/common';

import { useEsquisseHeader } from './EsquisseHeader.hooks';
import styles from './EsquisseHeader.module.scss';
import { EsquisseHeaderProps } from './EsquisseHeader.types';

export const EsquisseHeader = ({
  index,
  userId,
  esquisseId,
  createdAt,
  isEsquisseActive,
  toggleEsquisse,
}: EsquisseHeaderProps) => {
  const { isHostUser, onEditEsquisse, onDeleteEsquisse } = useEsquisseHeader({
    esquisseId,
    userId,
  });

  return (
    <FlexBox justifyContent='space-between'>
      <FlexBox alignItems='center'>
        <Typography color='b3' fontWeight={600} className={styles.title}>
          エスキス{index + 1}回目
        </Typography>
      </FlexBox>

      <FlexBox alignItems='center' gap='2rem'>
        <Typography
          color='b3'
          fontSize='1.2rem'
          fontWeight={600}
          className={styles.date}
        >
          {format(new Date(createdAt), 'yyyy年M月d日')}
        </Typography>
        <FlexBox
          alignItems='center'
          className={
            isHostUser && isEsquisseActive
              ? styles.buttonsContainerActive
              : styles.buttonsContainerClosed
          }
        >
          {isHostUser && (
            <FlexBox
              alignItems='center'
              justifyContent='center'
              className={classNames(styles.buttonContainer, styles.buttonEdit)}
              onClick={onEditEsquisse}
            >
              <Icon iconName='pen' size='2rem' />
            </FlexBox>
          )}
          {isHostUser && (
            <FlexBox
              alignItems='center'
              justifyContent='center'
              className={classNames(
                styles.buttonContainer,
                styles.buttonDelete,
              )}
              onClick={onDeleteEsquisse}
            >
              <Icon iconName='trash' size='2rem' />
            </FlexBox>
          )}
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className={classNames(
              styles.buttonContainer,
              styles.buttonPink,
              isEsquisseActive
                ? styles.buttonPinkActive
                : styles.buttonPinkClosed,
            )}
            onClick={toggleEsquisse}
          >
            <Icon iconName='arrowSmall' size='2rem' />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
