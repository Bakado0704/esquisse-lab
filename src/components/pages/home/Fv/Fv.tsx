import { Button } from "@/components/common/Button";
import { FlexBox } from "@/components/common/FlexBox";
import Image from "next/image";
import fvImg from "@/assets/fv/fv.png";
import { Typography } from "@/components/common/Typography";

import styles from "./Fv.module.scss";
import { Icon } from "@/components/common/Icon";

const Fv = () => {
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.imageContainer}>
        <Image
          src={fvImg}
          alt="fv"
          height={800}
          style={{ objectFit: "cover" }}
        />
      </FlexBox>
      <FlexBox flexDirection="column" justifyContent="center" gap="2.4rem">
        <Typography fontSize="8.4rem" gothic color="w1">
          Hokudai
          <br />
          Esquisse
          <br />
          Forum
        </Typography>
        <Icon iconName="ArrowLarge" />
        <Button theme="rectPink" size="large" className={styles.button}>
          投稿する
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
export default Fv;
