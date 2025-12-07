"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import "./style/projects.scss";
import { useState } from "react";

const Projects = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="projects">
      <Button className="projects_btn" onClick={handleButton}>
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
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
