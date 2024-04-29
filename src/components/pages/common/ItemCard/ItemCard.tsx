import { format } from "date-fns";
import { useRouter } from "next/navigation";

import { FlexBox, Typography } from "@/components/common";

import styles from "./ItemCard.module.scss";
import { ItemCardProps } from "./ItemCard.types";
import { PostIcon } from "./PostIcon";

const AllPosts = ({ post }: ItemCardProps) => {
  const router = useRouter();

  return (
    <FlexBox
      onClick={() => router.push(`/work/${post.workId}`)}
      className={styles.card}
      key={post.id}
      flexDirection="column"
    >
      <FlexBox alignItems="flex-end" className={styles.imageContainer}>
        <Typography color="w1" fontSize="1.2rem">
          {format(post.createdAt, "yyyy.MM.dd")}
        </Typography>
      </FlexBox>
      <FlexBox
        flexDirection="column"
        gap="0.8rem"
        className={styles.cardDetailContainer}
      >
        <Typography ellipsis fontSize="1.4rem" fontWeight={600}>
          {post.subject}
        </Typography>
        <FlexBox gap="0.8rem" alignItems="center">
          <PostIcon />
          <Typography fontSize="1.2rem">{post.userName}</Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default AllPosts;
