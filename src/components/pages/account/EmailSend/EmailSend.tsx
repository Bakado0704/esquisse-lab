import Image from 'next/image';

import fvImg from '@/assets/fv/fv.png';
import { FlexBox, Typography } from '@/components/common';

import styles from './EmailSend.module.scss';

const EmailSend = () => {
  return (
    <FlexBox
      gap='2.4rem'
      width='100%'
      flexDirection='column'
      justifyContent='center'
      className={styles.container}
    >
      <FlexBox className={styles.bg}>
        <Image fill src={fvImg} alt='fv' style={{ objectFit: 'cover' }} />
      </FlexBox>

      <Typography
        color='w1'
        fontWeight={600}
        fontSize='2.4rem'
        textAlign='center'
      >
        メールアドレス受信確認用のメールを送信しました
      </Typography>
      <Typography
        color='w1'
        fontSize='1.2rem'
        textAlign='center'
        lineHeight='150%'
      >
        先ほど入力したメールアドレス宛に、メールアドレス受信確認用のメールを送信しました。
        <br />
        メールをご確認いただき、メールに記録されたURLをクリックして、メールアドレスの受信確認を完了してください。
      </Typography>
    </FlexBox>
  );
};

export default EmailSend;
