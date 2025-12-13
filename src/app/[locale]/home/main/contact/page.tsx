"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import "./style/contact.scss";

const Contact = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("contact");
  return (
    <div className="contact">
      <Button
        className={`contact_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <p className="contact_title">{t("head")}</p>
        <HexBg
          className="contact__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {isOpen ? (
        <Container className="contact_container">
          <p>{t("title")}</p>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
