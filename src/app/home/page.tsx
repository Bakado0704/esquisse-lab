"use client";

import fvImg from "@/assets/fv/fv.png";
import { FlexBox } from "@/components/common/FlexBox";
import styles from "./Page.module.scss";
import { Typography } from "@/components/common/Typography";
import { Icon } from "@/components/common/Icon";
import Image from "next/image";
import { Button } from "@/components/common/Button";

export default function Page() {
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.imageContainer}>
        <Image
          src={fvImg}
          alt="fv"
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </FlexBox>
      <FlexBox flexDirection="column" justifyContent="center" gap="2.4rem">
        <Typography fontSize="9rem" lineHeight="130%" gothic color="w1">
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
}
