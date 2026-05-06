"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Card, Categories, projects } from "@/components";
import Image from "next/image";
import { CategoryKey } from "@/components/type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style/style.scss";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 769;

const ProjectPage = () => {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const cards = cardsRef.current.filter(Boolean);

    ScrollTrigger.getAll().forEach((st) => st.kill());

    if (isMobile) {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              scroller: ".main_cont",
            },
          },
        );
      });
    } else {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.15,
        },
      );
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [filteredProjects]);

  return (
    <article className="projects_container">
      <h2>{t("title")}</h2>
      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="projects_grid">
        {filteredProjects.map((item, index) => (
          <Card
            key={item.id}
            variant="project"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <div className="project_media">
              <Image src={item.img} alt={t(`items.${item.key}.title`)} />
              <span className="project_media_line" />
              <div className="project_media_header">
                <span className="project_id">{item.project}</span>
                <span className="project_category">
                  {t(`items.${item.key}.category`)}
                </span>
              </div>
            </div>
            <div className="project_body">
              <h3 className="project_title">{t(`items.${item.key}.title`)}</h3>
              <p className="project_desc">
                {t(`items.${item.key}.description`)}
              </p>
              <div className="project_tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="project_tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </article>
  );
};

export default ProjectPage;
