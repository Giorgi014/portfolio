"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import "./style/contact.scss";

const Contact = ({ isOpen }: SectionProps) => {
  const t = useTranslations("contact");
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation();

  return (
    <div className="contact">
      <Button
        className={`contact_btn ${isOpen && "active"}`}
        onClick={openModal}
      >
        <p className="contact_title">{t("head")}</p>
        <HexBg
          className="contact__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {open && (
        <Container
          variant="container"
          className={`contact_container ${isClosing && "closing"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill className="close" onClick={closeModal} />
          <p>{t("title")}</p>
        </Container>
      )}
    </div>
  );
};

export default Contact;
