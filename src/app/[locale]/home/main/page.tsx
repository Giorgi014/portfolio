"use client";

import { useEffect, useState, useRef } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import { ActiveSection, MainProps } from "@/components/type";
import { HexBg, Container } from "@/components";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks";
import gsap from "gsap";
import "./style/header.scss";

const Header = ({ onProjectsToggle }: MainProps) => {
  const t = useTranslations("menu");
  const tAbout = useTranslations("about");
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [navigation, setNavigation] = useState<boolean>(false);
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

  const aboutToggle = useToggleAnimation({
    isOpen: activeSection === "about",
    onToggle: () => handleSectionToggle("about"),
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);

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

  useEffect(() => {
    if (aboutToggle.open && !aboutToggle.isClosing) {
      gsap.set([titleRef.current, professionRef.current, aboutMeRef.current], {
        opacity: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.3,
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          professionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          aboutMeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }

    if (aboutToggle.isClosing) {
      const tl = gsap.timeline();

      tl.to(aboutMeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power3.in",
      })
        .to(
          professionRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.7,
            ease: "power3.in",
          },
          "-=0.2",
        )
        .to(
          titleRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.7,
            ease: "power3.in",
          },
          "-=0.2",
        );
    }
  }, [aboutToggle.open, aboutToggle.isClosing]);

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <header className="header_container">
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
        <nav>
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
        </nav>
      )}

      {isMobileNav && navigation && (
        <nav>
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
        </nav>
      )}

      {aboutToggle.open && (
        <Container
          variant="container"
          className={`about_container ${aboutToggle.isClosing && "closing"}`}
          onAnimationEnd={aboutToggle.handleAnimationEnd}
        >
          <RiCloseLargeFill
            className="close"
            onClick={aboutToggle.closeModal}
          />
          <h2 ref={titleRef} className="about_me_title">
            {tAbout("title")}
          </h2>
          <p ref={professionRef} className="about_profecion">
            {tAbout("profecion")}
          </p>
          <p ref={aboutMeRef} className="about_me">
            {tAbout("about_me")}
          </p>
        </Container>
      )}
    </header>
  );
};

export default Header;
