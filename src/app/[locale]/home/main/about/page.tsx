"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import "./style/about.scss";

const About = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("about");

  return (
    <div className="about">
      <Button
        className={`about_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <p className="about_title">{t("head")}</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>
      {isOpen ? (
        <Container className="about_container">
          <div>
            <p>{t("title")}</p>
            <p>{t("profecion")}</p>
            <p>{t("about_me")}</p>
          </div>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
