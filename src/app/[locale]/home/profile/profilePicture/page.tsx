import "./style/profile.scss";
import { Container } from "@/components/container";

const Profile = () => {
  return (
    <Container className="profile" variant="profile">
      <img src="/img/cat.jpg" alt="profile pcture" />
    </Container>
  );
};

export default Profile;
