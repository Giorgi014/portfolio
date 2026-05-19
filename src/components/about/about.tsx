"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "./data";
import { skillCategories } from "./skillCategories";
import "./style/style.scss";

export const About = () => {
  const t = useTranslations("about");

  return (
    <article className="about_page">
      <section>
        <h2 className="about_page_title">{t("title")}</h2>
        <div className="about_page_divider"></div>
      </section>

      <section className="about_page_bio">
        <p className="about_page_bio_text">{t("bio")}</p>
      </section>

      <section>
        <h3 className="about_skills_label">{t("arsenal.title")}</h3>
        <span className="about_page_label">{t("subtitle")}</span>
        {skillCategories.map((category) => (
          <div key={category} className="about_page_module">
            <div className="about_module_header">
              <div className="about_page_module_dot"></div>
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

      <section className="about_status">
        <div className="about_status_row">
          <div className="about_status_pulse"></div>
          <span className="about_status_text">{t("status")}</span>
        </div>
      </section>
    </article>
  );
};
