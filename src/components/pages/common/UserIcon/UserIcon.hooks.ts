import { useRouter } from 'next/navigation';

type userUserIconProps = {
  isRouterActive: boolean;
  href: string;
};

export const useUserIcon = ({ isRouterActive, href }: userUserIconProps) => {
  const router = useRouter();

  const onHandleUser = () => {
    if (isRouterActive) {
      router.push(`${href}`);
    }
  };

  return {
    onHandleUser,
  };
};
