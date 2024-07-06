import classNames from 'classnames';

import { Card } from '../Card';
import { Fade } from '../Fade';
import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

const Modal = ({
  open,
  title,
  onClose,
  children,
  padding = '2.4rem 1.2rem',
  keepMounted,
  width = 'full',
  closeOnCrossClick = false,
  scrollable = true,
  position = 'center',
}: ModalProps) => {
  return (
    <Fade show={open} keepMounted={keepMounted} className={styles.root}>
      <div
        onClick={() => {
          if (!closeOnCrossClick && onClose) {
            onClose();
          }
        }}
        className={styles.backdrop}
      />
      <div
        className={classNames(styles.modal, styles[width], styles[position])}
      >
        <Card
          fullWidth
          padding={padding}
          overflow={scrollable ? 'scroll' : 'initial'}
          className={styles.cardContainer}
        >
          {(onClose || title) && (
            <FlexBox
              alignItems='flex-start'
              justifyContent='space-between'
              className={styles.header}
            >
              {typeof title === 'string' ? (
                <Typography fontWeight='600' fontSize='2rem'>
                  {title}
                </Typography>
              ) : (
                title
              )}
              {closeOnCrossClick && (
                <Icon
                  iconName='close'
                  color='b1'
                  size='2rem'
                  onClick={onClose}
                />
              )}
            </FlexBox>
          )}
          <div className={styles['content-style']}>{children}</div>
        </Card>
      </div>
    </Fade>
  );
};

export default Modal;
