import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <IoSettingsSharp />
    </div>
  );
};

export default Sidebar;
