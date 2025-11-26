import Main from "./main/page";
import Info from "./profile/info/page";
import Profile from "./profile/profilePicture/page";
import "./style/home_page.scss";

const HomePage = () => {
  return (
    <div className="profile_cont">
      <div className="profile_info">
        <Profile />
        <Info />
      </div>
      <div className="profile_content">
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
