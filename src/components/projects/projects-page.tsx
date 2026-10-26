"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Card, Categories, projects, ProjectsDialog } from "@/components";
import Image from "next/image";
import { CategoryKey } from "@/components/type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 769;

const Projects = () => {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
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
              scroller: "[data-scroll-container]",
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

  const openModal = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
  };

  return (
    <article>
      <p>{"// SELECTED WORK"}</p>
      <h2>{t("title")}</h2>
      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div>
        {filteredProjects.map((item, index) => (
          <Card
            key={item.id}
            variant="project"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            title="View More"
            onClick={() => openModal(item)}
          >
            <div>
              <Image
                src={item.img}
                alt={t(`items.${item.key}.title`)}
              />
              <div>
                <span>
                  {item.project}
                </span>
                <span>
                  {t(`items.${item.key}.category`)}
                </span>
              </div>
            </div>
            <div>
              <h3>
                {t(`items.${item.key}.title`)}
              </h3>
              <p>
                {t(`items.${item.key}.description`)}
              </p>
              <div>
                {item.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <ProjectsDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </article>
  );
};

export default Projects;
