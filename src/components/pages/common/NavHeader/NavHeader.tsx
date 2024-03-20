import { Button } from "@/components/common/Button";
import { FlexBox } from "@/components/common/FlexBox";
import logo from "@/assets/logo/esquisse-lab.png";
import Image from "next/image";

const NavHeader = () => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" height="6rem">
      <Image src={logo} alt="logo" height={40} />
      <Button>ログイン</Button>
    </FlexBox>
  );
};
export default NavHeader;