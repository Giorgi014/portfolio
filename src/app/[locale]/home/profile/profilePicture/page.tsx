import { ProfileContainer } from "@/components/profile-container";
import "./style/profile.scss";

const Profile = () => {
  return (
    <ProfileContainer className="profile">
      <img src="/img/cat.jpg" alt="profile pcture" />
    </ProfileContainer>
  );
};

export default Profile;
