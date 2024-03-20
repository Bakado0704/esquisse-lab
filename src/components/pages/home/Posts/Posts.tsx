import { Typography } from "@/components/common/Typography";
import postImage from "@/assets/fv/fv.png";
import { FlexBox } from "@/components/common/FlexBox";
import Image from "next/image";
import { PostsProps } from "./Posts.types";
import { Post } from "@/types/application/post.types";
import { Separator } from "@/components/common/Separator";

import styles from "./Posts.module.scss";
import { format } from "date-fns";
import { PostIcon } from "./PostIcon";

const Posts = ({ posts }: PostsProps) => {
  return (
    <FlexBox flexDirection="column" gap="3.2rem" padding="8.2rem 0 3.6rem">
      <Typography fontSize="3.6rem" gothic color="accent1">
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
      <FlexBox justifyContent="center">
        <button className="">
          <Typography fontSize="3rem" gothic className={styles.viewButton}>
            View All Posts
          </Typography>
        </button>
      </FlexBox>
    </FlexBox>
  );
};

export default Posts;
