"use client";

import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { Button, SoundSettings, GraphicSettings } from "@/components";
import "./style/sidebar.scss";

const Sidebar = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <article className="sidebar">
      <section className="sidebar_settings">
        <Button className="settings_btn" onClick={toggleSettings}>
          <p className="settings_text">Settings</p>
          <IoSettingsSharp className="settings_icon" />
        </Button>
        {showSettings && (
          <section className="setitngs">
            <SoundSettings />
            <GraphicSettings />
          </section>
        )}
      </section>
    </article>
  );
};

export default Sidebar;
