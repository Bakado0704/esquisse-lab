import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { onAuthStateChanged } from '@/libs/repository/auth';
import { fetchUserInfo } from '@/libs/service/user';
import { User } from '@/types/application/user.types';

type AuthContextType = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          const userInfo = await fetchUserInfo({ userId: authUser.uid });
          setUser(userInfo);
        } catch (error) {
          setUser(undefined);
        }
      } else {
        setUser(undefined);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
