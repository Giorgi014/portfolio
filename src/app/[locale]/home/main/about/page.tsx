"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/headerButton";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import "./style/about.scss";

const About = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("about");
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
    <div className="about">
      <Button
        className={`about_btn ${isOpen && "active"}`}
        onClick={handleToggle}
      >
        <p className="about_title">{t("head")}</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>

      {open && (
        <Container
          className={`about_container ${isClosing && "closing"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill className="close" onClick={handleClose} />
          <h2 className="about_me_title">{t("title")}</h2>
          <p className="about_profecion">{t("profecion")}</p>
          <p className="about_me">{t("about_me")}</p>
        </Container>
      )}
    </div>
  );
};

export default About;
