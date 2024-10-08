import { getUser } from '@/libs/repository/individual/user';
import { getSelectedWorks } from '@/libs/repository/individual/work';
import { User } from '@/types/application/user.types';
import { Work } from '@/types/application/work.types';

export type userPageData = {
  user: User;
  architectureWork: Work[];
};

export const FetchUserPageData = async ({
  userId,
}: {
  userId: string;
}): Promise<userPageData> => {
  const user = await getUser({ userId });
  const architectureWork = await getSelectedWorks({
    workIds: user.workIds,
  });

  return {
    user,
    architectureWork,
  };
};
