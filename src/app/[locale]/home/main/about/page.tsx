"use client";

import { HexBg } from "@/components/hexBg";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import { useTranslations } from "next-intl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useToggleAnimation } from "@/app/hooks/containerAnimation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style/about.scss";

const About = ({ isOpen, onToggle }: SectionProps) => {
  const t = useTranslations("about");
  const { open, isClosing, openModal, closeModal, handleAnimationEnd } =
    useToggleAnimation({ isOpen, onToggle });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (open && !isClosing) {
      gsap.set([titleRef.current, professionRef.current, aboutMeRef.current], {
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
      })
        .to(
          professionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          aboutMeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }

    if (isClosing) {
      const tl = gsap.timeline();

      tl.to(aboutMeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power3.in",
      })
        .to(
          professionRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.7,
            ease: "power3.in",
          },
          "-=0.2"
        )
        .to(
          titleRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.7,
            ease: "power3.in",
          },
          "-=0.2"
        );
    }
  }, [open, isClosing]);

  return (
    <div className="about">
      <Button className={`about_btn ${isOpen && "active"}`} onClick={openModal}>
        <p className="about_title">{t("head")}</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>

      {open && (
        <Container
          variant="container"
          className={`about_container ${isClosing && "closing"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseLargeFill className="close" onClick={closeModal} />
          <h2 ref={titleRef} className="about_me_title">
            {t("title")}
          </h2>
          <p ref={professionRef} className="about_profecion">
            {t("profecion")}
          </p>
          <p ref={aboutMeRef} className="about_me">
            {t("about_me")}
          </p>
        </Container>
      )}
    </div>
  );
};

export default About;
