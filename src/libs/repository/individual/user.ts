import { userRepository } from '@/libs/repository/firebase';
import { User } from '@/types/application/user.types';

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await userRepository.list();
    return users;
  } catch {
    throw new Error('Failed to fetch users');
  }
};

export const getUser = async ({
  userId,
}: {
  userId: string;
}): Promise<User> => {
  try {
    const user = await userRepository.get({ id: userId });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch {
    throw new Error(`Failed to fetch user with ID ${userId}`);
  }
};
