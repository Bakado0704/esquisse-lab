import {
  AnchorLink,
  FlexBox,
  Heading,
  Icon,
  Typography,
} from '@/components/common';

import styles from './CustomError.module.scss';
import { CustomErrorProps } from './CustomError.types';

const CustomError = ({ statusCode, detail }: CustomErrorProps) => (
  <FlexBox justifyContent='center' flexGrow={1} className={styles.container}>
    <div className={styles.bg} />
    <FlexBox flexDirection='column' gap='3.2rem' justifyContent='center'>
      <FlexBox flexDirection='column' gap='1.6rem'>
        <FlexBox justifyContent='center'>
          <FlexBox
            justifyContent='center'
            alignItems='center'
            className={styles.attentionIconContainer}
          >
            <Icon
              iconName='attention'
              size='9rem'
              color='red1'
              className={styles.attentionIcon}
            />
          </FlexBox>
        </FlexBox>

        <Heading
          headingLevel='h1'
          fontSize='24px'
          fontWeight='700'
          textAlign='center'
        >
          エラーコード：{statusCode}
        </Heading>
        <Typography lineHeight='175%'>{detail}</Typography>
      </FlexBox>
      <FlexBox justifyContent='center'>
        <AnchorLink href='/' className={styles.navigateToTop}>
          トップページに戻る
        </AnchorLink>
      </FlexBox>
    </FlexBox>
  </FlexBox>
);

export default CustomError;
