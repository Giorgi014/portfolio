"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Cart from "@/components/cart";
import "./style/projects.scss";

const Projects = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("projects");
  const [isClosing, setIsClosing] = useState<boolean>(false);

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
          <Cart />
        </Container>
      )}
    </div>
  );
};

export default Projects;
