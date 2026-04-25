"use client";

import { Button } from "@/components";
import { DownRown } from "@/assets/img/dow-row";
import { useTranslations } from "next-intl";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { useTyping } from "@/app/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style/style.scss";

gsap.registerPlugin(ScrollTrigger);

const SYSTEM_TEXT = "> SYSTEM_INIT... CONNECTION_ESTABLISHED";
const SPEED = 28;
const NAME_SPEED = 50;

const HomePage = () => {
  const t = useTranslations("main");
  const nameText = t("name");
  const professionText = t("profession");
  const btnRef = useRef<HTMLElement>(null);
  const heroAboutRef = useRef<HTMLParagraphElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step >= 3) return;
    const durations: Record<number, number> = {
      1: SYSTEM_TEXT.length * SPEED + 150,
      2: nameText.length * NAME_SPEED + 250,
      3: professionText.length * SPEED + 250,
    };
    const timer = setTimeout(() => setStep((s) => s + 1), durations[step]);
    return () => clearTimeout(timer);
  }, [step, nameText.length, professionText.length]);

  const systemDisplayed = useTyping(SYSTEM_TEXT, step >= 1);
  const nameDisplayed = useTyping(nameText, step >= 2, NAME_SPEED);
  const professionDisplayed = useTyping(professionText, step >= 3);

  useEffect(() => {
    gsap.set(btnRef.current, { opacity: 0, y: 30 });

    gsap.to(btnRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2.8,
    });
  }, []);

  useEffect(() => {
    const scroll = [
      heroAboutRef.current,
      aboutMeRef.current,
      readMoreRef.current,
    ];

    gsap.fromTo(
      scroll,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: scroll[0],
          start: "top 90%",
          scroller: ".main_cont",
        },
      },
    );
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <main>
      <p className={`system_init${step === 1 ? " is_typing" : ""}`}>
        {systemDisplayed || " "}
      </p>
      <h1 className={step === 2 ? "is_typing" : ""}>{nameDisplayed || " "}</h1>
      <p className={`profession${step >= 3 ? " is_typing" : ""}`}>
        {professionDisplayed || " "}
      </p>
      <section className="button_section" ref={btnRef}>
        <Link href="/projects">
          <Button variant="default">{t("view_projects")}</Button>
        </Link>
        <Link href="/contact">
          <Button variant="default">{t("contact")}</Button>
        </Link>
      </section>
      <DownRown className="down_row" />
      <section className="about_section">
        <p
          className="hero_about"
          ref={heroAboutRef}
        >{`// ${t("hero_about")}`}</p>
        <p className="about_me" ref={aboutMeRef}>
          {t("about")}
        </p>
        <div ref={readMoreRef}>
          <Link href="/about">
            <Button variant="read_more">
              {t("read_more")} <LuMoveRight />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
