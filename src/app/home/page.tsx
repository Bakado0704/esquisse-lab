"use client";

import { Separator } from "@/components/common/Separator";
import { Fv } from "@/components/pages/home/Fv";
import { Posts } from "@/components/pages/home/Posts";
import { Recruit } from "@/components/pages/home/Recruit";
import { getPosts } from "@/libs/getPosts";

export default function Page() {
  const posts = getPosts();

  return (
    <>
      <Fv />
      <Separator direction="horizontal" marginTop="10.4rem" />
      <Posts posts={posts} />
      <Recruit />
    </>
  );
}
