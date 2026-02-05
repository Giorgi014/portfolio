"use client";

import Header from "./main/page";
import Info from "./profile/info/page";
import Profile from "./profile/profilePicture/page";
import { useState } from "react";
import Sidebar from "./sidebar/page";
import "./style/home_page.scss";

const HomePage = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);

  return (
    <main className="profile_cont">
      <section className="profile_info">
        <Profile />
        <Info />
      </section>
      <article className="profile_content_cont">
        <section className="profile_header">
          <Header onProjectsToggle={setIsProjectsOpen} />
        </section>
        <Sidebar />
      </article>
    </main>
  );
};

export default HomePage;
