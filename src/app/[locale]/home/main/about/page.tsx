"use client";

import { Button, HexBg } from "@/components";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import "./style/about.scss";

const About = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("about");

  return (
    <div className="about">
      <Button className={`about_btn ${isOpen && "active"}`} onClick={onToggle}>
        <p className="about_title">{t("head")}</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>
    </div>
  );
};

export default About;
