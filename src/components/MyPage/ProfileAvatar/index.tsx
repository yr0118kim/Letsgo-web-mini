import * as a from "./style";
import Avatar from "../../../assets/img/ProfileImage.svg";
import { useMyUserInfo } from "../../../hooks/User/userInfo";

const ProfileAvatar = () => {
  const { data: userInfo, isLoading, isError } = useMyUserInfo();

  if (isLoading) return <div>로딩 중</div>;
  if (isError) return <div>정보를 불러오는 데 실패했습니다.</div>;

  return (
    <a.AvatarWrapper>
      <a.NavAvatarWraper>
        <a.NavAvatarImg src={userInfo?.image || Avatar} />
      </a.NavAvatarWraper>
      <a.ProfileWraper>
        <a.ProfileName>{userInfo?.nickname}</a.ProfileName>
        <a.ProfileIntroduction>{userInfo?.username}</a.ProfileIntroduction>
        <a.NavAvatarTag>
          <a.NavAvatarTagText>#즐겁다</a.NavAvatarTagText>
        </a.NavAvatarTag>
      </a.ProfileWraper>
    </a.AvatarWrapper>
  );
};

export default ProfileAvatar;
