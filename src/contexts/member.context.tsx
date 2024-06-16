import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const MemberContext = createContext<{
  isOpenMember: boolean;
  setIsOpenMember: Dispatch<SetStateAction<boolean>>;
}>({
  isOpenMember: false,
  setIsOpenMember: () => {},
});

export const useMemberContext = () => useContext(MemberContext);

export const MemberProvider = ({ children }: { children?: ReactNode }) => {
  const [isOpenMember, setIsOpenMember] = useState<boolean>(false);

  const value = { isOpenMember, setIsOpenMember };

  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
};
