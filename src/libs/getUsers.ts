import { users } from "@/dummyData/users";
import { User } from "@/types/application/user.types";

export const getUsers: () => User[] = () => {
  return users;
};
