import { User } from '@/types/application/user.types';

import { userRepository } from './repository/firebase';

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await userRepository.list();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
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
  } catch (error) {
    console.error(`Failed to fetch user with ID ${userId}:`, error);
    throw new Error(`Failed to fetch user with ID ${userId}`);
  }
};
