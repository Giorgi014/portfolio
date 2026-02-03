"use client";

import Header from "./main/page";
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
    <main className="profile_cont">
      <section className="profile_info">
        <Profile />
        <Info />
      </section>
      <article className="profile_content_cont">
        <section className="profile_header">
          <Header
            onProjectsToggle={setIsProjectsOpen}
            selectedCategory={selectedCategory}
          />
        </section>
        {/* Temporary section */}
        <section className="">
          <Sidebar />
          {/* <Categories
            className={isProjectsOpen ? "visible" : "hidden"}
            categoryChange={setSelectedCategory}
            selectedCategory={selectedCategory}
          /> */}
        </section>
      </article>
    </main>
  );
};

export default HomePage;
