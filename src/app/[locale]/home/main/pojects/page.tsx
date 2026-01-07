"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Cart from "@/components/cart";
import { allProjects } from "@/components/projects";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import "./style/projects.scss";

type ProjectProps = SectionProps & {
  selectedCategory?: string;
};

const Projects = ({
  isOpen,
  onToggle,
  selectedCategory = "all",
}: ProjectProps) => {
  const t = useTranslations("projects");
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation({ isOpen, onToggle });

  const filterProjects = useMemo(
    () =>
      selectedCategory === "all"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory
          ),
    [selectedCategory]
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
          <RiCloseLargeFill className="close" onClick={closeModal} />
          <p>{t("title")}</p>
          <Cart filterProjects={filterProjects} />
        </Container>
      )}
    </div>
  );
};

export default Projects;
