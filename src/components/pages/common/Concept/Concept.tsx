import { FlexBox, Icon, Typography } from "@/components/common";
import { IconName } from "@/components/common/Icon";

import styles from "./Concept.module.scss";

const Concept = () => {
  const conceptList: {
    iconName: IconName;
    title: string;
    description_top?: string;
    description_middle?: string;
    description_bottom?: string;
  }[] = [
    {
      iconName: "support",
      title: "エスキスのサポート",
      description_top: "作品を投稿する・エスキスをする場として、",
      description_middle: "クリエイティブな想像の場を提供します。",
    },
    {
      iconName: "document",
      title: "過程が積み重なる",
      description_top: "完成品ではなく、過程を投稿することで、",
      description_middle: "作品の移り変わりが記録されます。",
      description_bottom: "あなたの過程はきっと後輩のためになるでしょう。",
    },
    {
      iconName: "teacher",
      title: "経験豊富な講師陣",
      description_top: "計画設計演習を一通り経験した、",
      description_middle: "北海道大学の建築都市コースの先輩が、",
      description_bottom: "あなたをサポートします。",
    },
  ];

  return (
    <FlexBox className={styles.container}>
      {conceptList.map((concept, index) => (
        <FlexBox
          flexDirection="column"
          key={index}
          gap="1.6rem"
          className={styles.conceptItem}
        >
          <FlexBox justifyContent="center">
            <Icon iconName={concept.iconName} className={styles.icon} />
          </FlexBox>

          <FlexBox justifyContent="center">
            <Typography color="main1" className={styles.title}>
              {concept.title}
            </Typography>
          </FlexBox>

          <FlexBox justifyContent="center">
            <Typography color="main1" className={styles.description}>
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
