"use client";

import Main from "./main/page";
import Info from "./profile/info/page";
import Profile from "./profile/profilePicture/page";
import { useState } from "react";
import Categories from "./categories/page";
import Sidebar from "./sidebar/page";
import "./style/home_page.scss";

const HomePage = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className="profile_cont">
      <div className="profile_info">
        <Profile />
        <Info />
      </div>
      <div className="profile_content">
        <Main
          onProjectsToggle={setIsProjectsOpen}
          selectedCategory={selectedCategory}
        />
      </div>
      <Sidebar>
        <Categories
          className={isProjectsOpen ? "visible" : "hidden"}
          categoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </Sidebar>
    </div>
  );
};

export default HomePage;
