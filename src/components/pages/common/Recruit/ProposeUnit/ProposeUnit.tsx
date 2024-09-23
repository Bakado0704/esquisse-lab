import { Button, FlexBox, Typography } from '@/components/common';

import { useProposeUnit } from './ProposeUnit.hooks';
import styles from './ProposeUnit.module.scss';

const ProposeUnit = () => {
  const { onScrollMember } = useProposeUnit();

  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <FlexBox flexDirection='column' gap='0.8rem'>
        <Typography gothic color='w1' className={styles.title}>
          Join
          <br />
          Kado Team
        </Typography>
        <Typography lineHeight='180%' color='w1' className={styles.description}>
          チーム角は経験豊富な講師を探しています
          <br />
          チームに加わり、新たな旅に出かけましょう
        </Typography>
      </FlexBox>

      <Button size='large' className={styles.button} onClick={onScrollMember}>
        メンバーを見る
      </Button>
    </FlexBox>
  );
};

export default ProposeUnit;
