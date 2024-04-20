import * as N from "./style";
import Avatar from "../../../../../assets/img/ProfileImage.svg";

const NavAvatar = () => {
  const registerData = JSON.parse(localStorage.getItem("registerData") || "{}");

  return (
    <N.AvatarWraper>
      <N.NavAvatarTag>
        <N.NavAvatarTagText>#즐겁다</N.NavAvatarTagText>
      </N.NavAvatarTag>
      <N.NavAvatarWraper>
        <N.NavAvatarImg src={Avatar} />
      </N.NavAvatarWraper>
      <N.NavTextWraper>
        <N.NavName>{registerData?.nickname}</N.NavName>
        <N.NavSchoolname>대구소프트웨어마이스터고</N.NavSchoolname>
        <N.NavIntroduction>안녕하세요 {registerData?.nickname}입니다 ✨</N.NavIntroduction>
      </N.NavTextWraper>
    </N.AvatarWraper>
  );
};

export default NavAvatar;
