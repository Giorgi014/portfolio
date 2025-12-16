import { ProfileContainer } from "@/components/profileContainer";
import "./style/profile.scss";

const Profile = () => {
  return (
    <ProfileContainer className="profile">
      <img src="/img/cat.jpg" alt="profile pcture" />
    </ProfileContainer>
  );
};

export default Profile;
