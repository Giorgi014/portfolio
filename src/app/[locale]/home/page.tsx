"use client";

import Main from "./main/page";
import Info from "./profile/info/page";
import Profile from "./profile/profilePicture/page";
import "./style/home_page.scss";
import { useState } from "react";
import Categories from "./categories/page";

const HomePage = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);

  return (
    <div className="profile_cont">
      <div className="profile_info">
        <Profile />
        <Info />
      </div>
      <div className="profile_content">
        <Main onProjectsToggle={setIsProjectsOpen} />
      </div>
      <Categories className={isProjectsOpen ? "visible" : "hidden"} />
    </div>
  );
};

export default HomePage;
