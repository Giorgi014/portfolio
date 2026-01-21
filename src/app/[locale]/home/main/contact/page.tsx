"use client";

import { HexBg, Button, Container, Form } from "@/components";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style/contact.scss";

const Contact = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("contact");
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation({ isOpen, onToggle });

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (open && !isClosing) {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.3,
      });
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [open, isClosing]);

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
          <h2 ref={titleRef} className="contact_head">
            {t("title")}
          </h2>
          {/* <Form /> */}
          <Form open={open} isClosing={isClosing} />
        </Container>
      )}
    </div>
  );
};

export default Contact;
