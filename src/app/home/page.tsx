import Info from "./profile/info/page";
import Profile from "./profile/profilePicture/page";
import "./style/home_page.scss";

const HomePage = () => {
  return (
    <div className="profile_cont">
      <Profile />
      <Info />
    </div>
  );
};

export default HomePage;
