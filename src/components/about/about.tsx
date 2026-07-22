"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "./data";
import { skillCategories } from "./skillCategories";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ProfileIcon from "@/assets/img/giorgi014.png";
import "./style/style.scss";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 769;

export const About = () => {
  const t = useTranslations("about");
  const headTwoRef = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const headThreeRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const skills = skillsRef.current.filter(Boolean);
    const scroller = ".main_cont";

    const fadeInElements = [
      headTwoRef.current,
      divRef.current,
      bioRef.current,
      headThreeRef.current,
      spanRef.current,
    ];

    gsap.set([...fadeInElements, ...skills, statusRef.current], {
      opacity: 0,
      y: 30,
    });

    fadeInElements.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          scroller,
        },
      });
    });

    if (isMobile) {
      skills.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            scroller,
          },
        });
      });
    } else {
      gsap.to(skills, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current[0],
          start: "top 85%",
          scroller,
        },
      });
    }

    gsap.to(statusRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statusRef.current,
        start: "top 110%",
        scroller,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <article className="about_page">
      <section>
        <h2 className="about_page_title" ref={headTwoRef}>
          {t("title")}
        </h2>
        <div className="about_page_divider" ref={divRef}></div>
      </section>

      <div className="about_me">
        <Image src={ProfileIcon} width={250} height={250} alt={t("bio")} />
        <section className="about_page_bio" ref={bioRef}>
          <p className="about_page_bio_text">{t("bio")}</p>
        </section>
      </div>

      <h3 className="about_skills_label" ref={headThreeRef}>
        {t("arsenal.title")}
      </h3>
      <span className="about_page_label" ref={spanRef}>
        {t("subtitle")}
      </span>
      <section className="about_skills_container">
        {skillCategories.map((category, index) => (
          <div
            key={category}
            className="about_page_module"
            ref={(el) => {
              if (el) skillsRef.current[index] = el;
            }}
          >
            <div className="about_module_header">
              <span className="about_module_category">
                {t(`arsenal.skills.${category}.title`)}
              </span>
            </div>
            <div className="about_module_skills">
              {skillsData[category].map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="about_status" ref={statusRef}>
        <div className="about_status_row">
          <div className="about_status_pulse"></div>
          <span className="about_status_text">{t("status")}</span>
        </div>
      </section>
    </article>
  );
};
