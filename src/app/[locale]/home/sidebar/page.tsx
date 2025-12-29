import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import "./style/sidebar.scss";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="sidebar">
      {children}
      <section className="sidebar_settings">
        <button className="settings_btn">
          <p className="settings_text">Settings</p>
          <IoSettingsSharp className="settings_icon" />
        </button>
      </section>
    </article>
  );
};

export default Sidebar;
