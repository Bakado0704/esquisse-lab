import { FlexBox } from '@/components/common';
import { useEsquisseContext } from '@/contexts/esquisse.context';

import { ButtonUnit } from './ButtonUnit';
import styles from './Esquisse.module.scss';
import { EsquisseItem } from './EsquisseItem';
import { TitleUnit } from './TtitleUnit';

export const Esquisse = () => {
  const { esquisses } = useEsquisseContext();
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
                index={index}
                esquisse={esquisse}
              />
            );
          })}
        </FlexBox>
      </FlexBox>
      <ButtonUnit />
    </FlexBox>
  );
};

export default Esquisse;
