import * as a from "./style";
import Avatar from "../../../assets/img/ProfileImage.svg";

const ProfileAvatar = () => {
  const registerData = JSON.parse(localStorage.getItem("registerData") || "{}");

  return (
    <a.AvatarWrapper>
      <a.NavAvatarWraper>
        <a.NavAvatarImg src={Avatar} />
      </a.NavAvatarWraper>
      <a.ProfileWraper>
        <a.ProfileName>대구소프트웨어마이스터고 3학년 여학생</a.ProfileName>
        <a.ProfileIntroduction>
          안녕하세요 {registerData?.nickname}입니다 ✨
        </a.ProfileIntroduction>
        <a.NavAvatarTag>
          <a.NavAvatarTagText>#즐겁다</a.NavAvatarTagText>
        </a.NavAvatarTag>
      </a.ProfileWraper>
    </a.AvatarWrapper>
  );
};

export default ProfileAvatar;
