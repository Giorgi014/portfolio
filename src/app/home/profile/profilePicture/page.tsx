import "./style/profile.scss";

const Profile = () => {
  return (
    <div className="profile_container">
      <img src="/img/cat.jpg" alt="profile pcture" />
      <div className="border_cont">
        <div className="border one"></div>
        <div className="border two"></div>
        <div className="border three"></div>
        <div className="border four"></div>
      </div>
    </div>
  );
};

export default Profile;
