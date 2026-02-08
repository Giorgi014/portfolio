"use client";

import { HexBg, Button, Container, allProjects, Cart } from "@/components";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks";
import "./style/projects.scss";
import Categories from "../../categories/page";

type ProjectProps = SectionProps & {
  selectedCategory?: string;
};

const Projects = ({ isOpen, onToggle }: ProjectProps) => {
  const t = useTranslations("projects");
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation({ isOpen, onToggle });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterProjects = useMemo(
    () =>
      selectedCategory === "all"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory,
          ),
    [selectedCategory],
  );

  return (
    <div className="projects">
      <Button
        className={`projects_btn ${isOpen && "active"}`}
        onClick={openModal}
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
          <header className="project_header">
            <h2 className="projects_head">{t("title")}</h2>
            <Categories
              categoryChange={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <RiCloseLargeFill className="close" onClick={closeModal} />
          </header>
          <Cart filterProjects={filterProjects} />
        </Container>
      )}
    </div>
  );
};

export default Projects;
