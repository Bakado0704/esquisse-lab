import Image from "next/image";

import fvImg from "@/assets/fv/fv.png";
import { Button, FlexBox, Icon, Typography } from "@/components/common";

import styles from "./Fv.module.scss";

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
