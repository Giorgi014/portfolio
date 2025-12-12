"use client";

import { useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./pojects/page";
import { ActiveSection } from "@/components/type";
import "./style/main.scss";

const Main = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);

  const handleSectionToggle = (section: ActiveSection) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="main_container">
      <About
        isOpen={activeSection === "about"}
        onToggle={() => handleSectionToggle("about")}
      />
      <Projects
        isOpen={activeSection === "projects"}
        onToggle={() => handleSectionToggle("projects")}
      />
      <Contact
        isOpen={activeSection === "contact"}
        onToggle={() => handleSectionToggle("contact")}
      />
    </div>
  );
};

export default Main;
