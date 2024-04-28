import Image from "next/image";
import { useRouter } from "next/navigation";

import fvImg from "@/assets/fv/fv.png";
import { Button, FlexBox, Icon, Typography } from "@/components/common";

import styles from "./Fv.module.scss";

const Fv = () => {
  const router = useRouter();
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.containerInner}>
        <FlexBox className={styles.imageContainer}>
          <Image
            src={fvImg}
            alt="fv"
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox flexDirection="column" justifyContent="center" gap="2.4rem">
        <Typography gothic color="w1" className={styles.title}>
          Hokudai
          <br />
          Esquisse
          <br />
          Forum
        </Typography>
        <Icon iconName="arrowLarge" />
        <Button
          theme="rectPink"
          size="large"
          className={styles.button}
          onClick={() => router.push("/work/new")}
        >
          投稿する
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
export default Fv;
