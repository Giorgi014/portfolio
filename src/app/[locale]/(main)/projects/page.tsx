"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Card, Categories, projects } from "@/components";
import "./style/style.scss";
import Image from "next/image";
import { CategoryKey } from "@/components/type";

const ProjectPage = () => {
  const t = useTranslations("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <article className="projects_container">
      <h2>{t("title")}</h2>
      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="projects_grid">
        {filteredProjects.map((item) => (
          <Card key={item.id} variant="project">
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
