import { userRepository } from '@/libs/repository/firebase';
import { User } from '@/types/application/user.types';

export const fetchUserInfo = async ({
  userId,
}: {
  userId: User['id'];
}): Promise<User> => {
  const user = await userRepository.get({ id: userId });

  return user;
};
