"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import "./style/projects.scss";
import { useTranslations } from "next-intl";

const Projects = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("projects");

  return (
    <div className="projects">
      <Button
        className={`projects_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <p className="projects_title">{t("head")}</p>
        <HexBg
          className="projects__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {isOpen ? (
        <Container className="projects_container">
          <p>{t("title")}</p>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
