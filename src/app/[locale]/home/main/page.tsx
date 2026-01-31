"use client";

import { useEffect, useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import { ActiveSection, MainProps } from "@/components/type";
import { HexBg } from "@/components";
import { useTranslations } from "next-intl";
import "./style/main.scss";

type MainPageProps = MainProps & {
  selectedCategory?: string;
};

const Main = ({ onProjectsToggle, selectedCategory }: MainPageProps) => {
  const t = useTranslations("menu");
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [navigation, setNavigation] = useState<boolean>(false);
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

  const handleSectionToggle = (section: ActiveSection) => {
    const newSection = activeSection === section ? null : section;
    setActiveSection(newSection);
    if (section === "projects" && onProjectsToggle) {
      onProjectsToggle(newSection === "projects");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;

      setIsMobileNav(mobile);

      if (!mobile) {
        setNavigation(false);
        setActiveSection(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <div className="main_container">
      {isMobileNav && (
        <button className="navigation_btn" onClick={toggleNavigation}>
          <p className="navigation_text">{t("navigation")}</p>
          <HexBg
            className="navigation__bg"
            bgColor="#1C202B"
            borderColor="#000000"
          />
        </button>
      )}
      {!isMobileNav && (
        <>
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
        </>
      )}

      {isMobileNav && navigation && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Main;
