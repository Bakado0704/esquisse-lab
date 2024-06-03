import { GetServerSideProps } from "next";

import { Concept } from "@/components/pages/common/Concept";
import { Members } from "@/components/pages/common/Members";
import { Recruit } from "@/components/pages/common/Recruit";
import { ArchitectureWork } from "@/components/pages/user/ArchitectureWork";
import Profile from "@/components/pages/user/Profile/Profile";
import { getUsers } from "@/libs/getUsers";
import { getWorks } from "@/libs/getWorks";

const Page = ({ userId }: { userId: string }) => {
  const user = getUsers().filter((user) => user.id === userId)[0];
  const archiWork = getWorks();

  return (
    <>
      <Profile user={user} />
      <ArchitectureWork archiWork={archiWork} />
      <Recruit />
      <Concept />
      <Members />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (typeof id !== "string")
    return {
      notFound: true,
    };
  return {
    props: {
      userId: id,
    },
  };
};

export default Page;
