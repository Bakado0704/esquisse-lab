import { getUser } from '@/libs/service/firestore/user';
import { User } from '@/types/application/user.types';

export type userPageData = {
  user: User;
};

export const FetchEditUserPageData = async ({
  userId,
}: {
  userId: string;
}): Promise<userPageData> => {
  const user = await getUser({ userId });

  return {
    user,
  };
};
