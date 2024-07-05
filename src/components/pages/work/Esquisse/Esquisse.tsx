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
              <EsquisseItem
                key={esquisse.id}
                esquisse={esquisse}
                index={index}
                userId={userId}
              />
            );
          })}
        </FlexBox>
      </FlexBox>
      <ButtonUnit userId={userId} />
    </FlexBox>
  );
};

export default Esquisse;
