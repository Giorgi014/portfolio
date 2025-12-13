"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
import "./style/contact.scss";

const Contact = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("contact");
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
    <div className="contact">
      <Button
        className={`contact_btn ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <p className="contact_title">{t("head")}</p>
        <HexBg
          className="contact__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {open ? (
        <Container
          className={`contact_container ${isClosing ? "closing" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill className="close" onClick={handleClose} />
          <p>{t("title")}</p>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
