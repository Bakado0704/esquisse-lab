import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import { User } from '@/types/application/user.types';

const MemberContext = createContext<{
  members: User[];
  setMembers: Dispatch<SetStateAction<User[]>>;
}>({
  members: [],
  setMembers: () => {},
});

export const useMemberContext = () => useContext(MemberContext);

export const MemberProvider = ({ children }: { children?: ReactNode }) => {
  const [members, setMembers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    setMembers([]);
  }, [router.pathname]);

  const value = { members, setMembers };

  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
};
