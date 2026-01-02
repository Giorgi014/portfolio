"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Cart from "@/components/cart";
import "./style/projects.scss";
import { allProjects } from "@/components/projects";

type ProjectProps = SectionProps & {
  selectedCategory?: string;
};

const Projects = ({
  isOpen,
  onToggle,
  selectedCategory = "all",
}: ProjectProps) => {
  const t = useTranslations("projects");
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const filterProjects = useMemo(
    () =>
      selectedCategory === "all"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory
          ),
    [selectedCategory]
  );

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      return;
    }
    onToggle();
  };

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      onToggle();
    }
  };

  const open = isOpen || isClosing;

  return (
    <div className="projects">
      <Button
        className={`projects_btn ${isOpen && "active"}`}
        onClick={handleToggle}
      >
        <p className="projects_title">{t("head")}</p>
        <HexBg
          className="projects__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {open && (
        <Container
          variant="container"
          className={`${isClosing && "closing"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill className="close" onClick={handleClose} />
          <p>{t("title")}</p>
          <Cart filterProjects={filterProjects} />
        </Container>
      )}
    </div>
  );
};

export default Projects;
