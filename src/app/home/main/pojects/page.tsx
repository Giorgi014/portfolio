"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import "./style/projects.scss";

const Projects = ({ isOpen, onToggle }: SectionProps) => {
  return (
    <div className="projects">
      <Button
        className={`projects_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <p className="projects_title">Projects</p>
        <HexBg
          className="projects__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {isOpen ? (
        <Container className="projects_container">
          <p>Projects</p>
          <div className="border_cont">
            <div className="border one"></div>
            <div className="border two"></div>
            <div className="border three"></div>
            <div className="border four"></div>
          </div>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
