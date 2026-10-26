"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "./data";
import { skillCategories } from "./skillCategories";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ProfileIcon from "@/assets/img/giorgi014.png";

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
    const scroller = "[data-scroll-container]";

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
    <article>
      <section>
        <p>{"// PROFILE"}</p>
        <h2 ref={headTwoRef}>{t("title")}</h2>
        <div ref={divRef} />
      </section>

      <div>
        <Image src={ProfileIcon} width={250} height={250} alt={t("bio")} />
        <section ref={bioRef}>
          <p>{t("bio")}</p>
        </section>
      </div>

      <section>
        <h3 ref={headThreeRef}>{t("arsenal.title")}</h3>
        <span ref={spanRef}>{t("subtitle")}</span>
      </section>
      <section>
        {skillCategories.map((category, index) => (
          <div
            key={category}
            ref={(el) => {
              if (el) skillsRef.current[index] = el;
            }}
          >
            <div>
              <span>
                {t(`arsenal.skills.${category}.title`)}
              </span>
            </div>
            <div>
              {skillsData[category].map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section ref={statusRef}>
        <div>
          <span>
            <span />
            <span />
          </span>
          <span>
            {t("status")}
          </span>
        </div>
      </section>
    </article>
  );
};
