"use client";

import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { SoundSettings } from "@/components/soundSettings";
import { VisualSettings } from "@/components/visualSettngs";
import { Button } from "@/components/button";
import "./style/sidebar.scss";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <article className="sidebar">
      {children}
      <section className="sidebar_settings">
        {showSettings && (
          <section className="setitngs">
            <VisualSettings />
            <SoundSettings />
          </section>
        )}
        <Button className="settings_btn" onClick={toggleSettings}>
          <p className="settings_text">Settings</p>
          <IoSettingsSharp className="settings_icon" />
        </Button>
      </section>
    </article>
  );
};

export default Sidebar;
