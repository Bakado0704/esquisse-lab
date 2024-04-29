import { usePathname } from "next/navigation";

import { FlexBox, Typography } from "@/components/common";
import { ItemCard } from "@/components/pages/common/ItemCard";
import { getPosts } from "@/libs/getPosts";
import { getTag } from "@/libs/getTag";

import styles from "./AllPosts.module.scss";

const AllPosts = () => {
  const pathname = usePathname();
  const categoryId = getTag(pathname);
  const posts = getPosts();
  return (
    <FlexBox gap="3.2rem" flexDirection="column" className={styles.container}>
      <div className={styles.bg} />
      <FlexBox justifyContent="center">
        <Typography
          fontWeight={600}
          color="accent1"
          className={styles.postTitle}
        >
          {categoryId.charAt(0)}
        </Typography>
        <Typography fontWeight={600} color="main1" className={styles.postTitle}>
          {categoryId.slice(1)}
        </Typography>
      </FlexBox>
      <FlexBox className={styles.cardContainer}>
        {posts.map((post) => {
          return <ItemCard key={post.id} post={post} />;
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default AllPosts;
