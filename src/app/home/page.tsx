"use client";

import { Separator } from "@/components/common/Separator";
import { Concept } from "@/components/pages/common/Concept";
import { Members } from "@/components/pages/common/Members";
import { Recruit } from "@/components/pages/common/Recruit";
import { Fv } from "@/components/pages/home/Fv";
import { Posts } from "@/components/pages/home/Posts";
import { getPosts } from "@/libs/getPosts";
import { getUsers } from "@/libs/getUsers";

export default function Page() {
  const posts = getPosts();
  const users = getUsers();

  return (
    <>
      <Fv />
      <Separator direction="horizontal" marginTop="10.4rem" />
      <Posts posts={posts} />
      <Recruit />
      <Concept />
      <Members users={users} />
    </>
  );
}
