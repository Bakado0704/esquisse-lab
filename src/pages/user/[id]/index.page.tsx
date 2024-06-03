import { GetServerSideProps } from "next";

import { Concept } from "@/components/pages/common/Concept";
import { Members } from "@/components/pages/common/Members";
import { Recruit } from "@/components/pages/common/Recruit";
import Profile from "@/components/pages/user/Profile/Profile";
import { getUsers } from "@/libs/getUsers";

const Page = ({ userId }: { userId: string }) => {
  const user = getUsers().filter((user) => user.id === userId)[0];

  return (
    <>
      <Profile user={user} />
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
