import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";

import postImage from "@/assets/fv/fv.png";
import { FlexBox, Separator, Typography } from "@/components/common";
import { getPosts } from "@/libs/getPosts";
import { Post } from "@/types/application/post.types";

import { PostIcon } from "./PostIcon";
import styles from "./Posts.module.scss";

const Posts = () => {
  const router = useRouter();
  const posts = getPosts();
  return (
    <FlexBox flexDirection="column" gap="7.2rem" padding="8.4rem 0 7.2rem">
      <FlexBox flexDirection="column" gap="3.2rem">
        <Typography fontSize="4.8rem" gothic color="accent1">
          Posts
        </Typography>
        <FlexBox flexDirection="column">
          {posts.map((post: Post, index) => {
            return (
              <FlexBox
                key={index}
                flexDirection="column"
                gap="1.8rem"
                className={styles.post}
                onClick={() => router.push(`/work/${post.workId}`)}
              >
                <FlexBox width="100%" className={styles.imageContainer}>
                  <Image src={postImage} alt="post" layout="responsive" />
                </FlexBox>
                <FlexBox flexDirection="column" gap="1.2rem">
                  <FlexBox gap="1.8rem" alignItems="center">
                    <PostIcon />
                    <FlexBox flexDirection="column" gap="0.8rem">
                      <Typography fontSize="1.2rem">
                        {format(post.createdAt, "yyyy年MM月dd日")}
                      </Typography>
                      <Typography fontSize="1.2rem">{post.userName}</Typography>
                    </FlexBox>
                  </FlexBox>
                  <Typography
                    fontSize="2.4rem"
                    fontWeight={600}
                    lineHeight="150%"
                    ellipsis
                    className={styles.subject}
                  >
                    {post.subject}
                  </Typography>
                  <Typography ellipsis className={styles.description}>
                    {post.description}
                  </Typography>
                </FlexBox>
                <Separator direction="horizontal" />
              </FlexBox>
            );
          })}
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="center">
        <button onClick={() => router.push("/posts/全投稿")}>
          <Typography fontSize="3rem" gothic className={styles.viewButton}>
            View All Posts
          </Typography>
        </button>
      </FlexBox>
    </FlexBox>
  );
};

export default Posts;
