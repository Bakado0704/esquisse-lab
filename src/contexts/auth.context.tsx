import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
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
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      const unsubscribe = onAuthStateChanged(async (user) => {
        if (user) {
          await fetchUserInfo({ userId: user.uid })
            .then((userInfo) => {
              setUser(userInfo);
            })
            .catch(async (error) => {
              setUser(undefined);
              alert(error);
            });
        } else {
          setUser(undefined);
        }
      });
      unsubscribe();
    }
  }, [router]);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
