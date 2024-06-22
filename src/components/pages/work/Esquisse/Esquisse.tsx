import { FlexBox } from '@/components/common';

import { ButtonUnit } from './ButtonUnit';
import styles from './Esquisse.module.scss';
import { EsquisseProps } from './Esquisse.types';
import { EsquisseItem } from './EsquisseItem';
import { TitleUnit } from './TtitleUnit';

export const Esquisse = ({ esquisses, userId }: EsquisseProps) => {
  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <div className={styles.bg} />
      <FlexBox flexDirection='column' gap='2.4rem'>
        <TitleUnit />
        <FlexBox flexDirection='column'>
          {esquisses.map((esquisse, index) => {
            return (
              <FlexBox key={esquisse.id} flexDirection='column'>
                <FlexBox width='100%' justifyContent='center'>
                  {index !== 0 && <div className={styles.line} />}
                </FlexBox>
                <EsquisseItem
                  esquisse={esquisse}
                  index={index}
                  userId={userId}
                />
              </FlexBox>
            );
          })}
        </FlexBox>
      </FlexBox>
      <ButtonUnit />
    </FlexBox>
  );
};

export default Esquisse;
