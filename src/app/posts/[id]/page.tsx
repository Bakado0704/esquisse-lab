"use client";

import { Concept } from "@/components/pages/common/Concept";
import { Members } from "@/components/pages/common/Members";
import { Recruit } from "@/components/pages/common/Recruit";
import { AllPosts } from "@/components/pages/posts/AllPosts";

export default function Page() {
  return (
    <>
      <AllPosts />
      <Recruit />
      <Concept />
      <Members />
    </>
  );
}
