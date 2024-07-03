import { FlexBox, Icon, Typography } from '@/components/common';
import { conceptList } from '@/dummyData/concept';
import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './Concept.module.scss';

const Concept = () => {
  useFadeIn({ targetId: 'concept', styles });
  return (
    <FlexBox
      id='concept'
      justifyContent='space-between'
      className={styles.container}
    >
      {conceptList.map((concept, index) => (
        <FlexBox
          key={index}
          flexDirection='column'
          gap='1.6rem'
          className={styles.conceptItem}
        >
          <FlexBox justifyContent='center'>
            <Icon iconName={concept.iconName} className={styles.icon} />
          </FlexBox>

          <FlexBox justifyContent='center'>
            <Typography
              color='main1'
              fontSize='2.4rem'
              fontWeight={600}
              className={styles.title}
            >
              {concept.title}
            </Typography>
          </FlexBox>

          <FlexBox justifyContent='center'>
            <Typography
              color='main1'
              fontSize='1rem'
              lineHeight='150%'
              textAlign='center'
            >
              {concept.description_top}
              <br />
              {concept.description_middle}
              <br />
              {concept.description_bottom}
            </Typography>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default Concept;
