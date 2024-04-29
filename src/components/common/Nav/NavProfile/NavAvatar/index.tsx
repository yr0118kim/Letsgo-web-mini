import * as N from "./style";
import Avatar from "../../../../../assets/img/ProfileImage.svg";
import { useMyUserInfo } from "../../../../../hooks/User/userInfo";

const NavAvatar = () => {
  const { data: userInfo } = useMyUserInfo();
  
  return (
    <N.AvatarWraper>
      <N.NavAvatarTag>
        <N.NavAvatarTagText>#즐겁다</N.NavAvatarTagText>
      </N.NavAvatarTag>
      <N.NavAvatarWraper>
        <N.NavAvatarImg src={Avatar}></N.NavAvatarImg>
      </N.NavAvatarWraper>
      <N.NavTextWraper>
        <N.NavName>{userInfo?.nickname}</N.NavName>
        <N.NavSchoolname>대구소프트웨어마이스터고</N.NavSchoolname>
        <N.NavIntroduction>안녕하세요 {userInfo?.nickname}입니다 ✨</N.NavIntroduction>
      </N.NavTextWraper>
    </N.AvatarWraper>
  );
};

export default NavAvatar;
