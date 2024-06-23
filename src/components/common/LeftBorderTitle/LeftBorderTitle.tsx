import { FlexBox } from '../FlexBox';
import { Heading } from '../Heading';
import { LeftBorder } from '../LeftBorder';
import { Typography } from '../Typography';

import styles from './LeftBorderTitle.module.scss';
import { LeftBorderTitleProps } from './LeftBorderTitle.types';

const LeftBorderTitle = ({
  title,
  subTitle,
  color: background,
}: LeftBorderTitleProps) => (
  <FlexBox className={styles.container}>
    <LeftBorder color={background} />
    <FlexBox gap='1rem' flexDirection='column'>
      <Heading headingLevel='h2' className={styles.title}>
        {title}
      </Heading>
      <Typography fontSize='1.2rem' color='b2'>
        {subTitle}
      </Typography>
    </FlexBox>
  </FlexBox>
);

export default LeftBorderTitle;
