"use client";

import { useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./pojects/page";
import { ActiveSection, MainProps } from "@/components/type";
import "./style/main.scss";

type MainPageProps = MainProps & {
  selectedCategory?: string;
};

const Main = ({ onProjectsToggle, selectedCategory }: MainPageProps) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);

  const handleSectionToggle = (section: ActiveSection) => {
    const newSection = activeSection === section ? null : section;
    setActiveSection(newSection);
    if (section === "projects" && onProjectsToggle) {
      onProjectsToggle(newSection === "projects");
    }
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
        selectedCategory={selectedCategory}
      />
      <Contact
        isOpen={activeSection === "contact"}
        onToggle={() => handleSectionToggle("contact")}
      />
    </div>
  );
};

export default Main;
