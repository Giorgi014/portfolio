import { Button, projects } from "@/components";
import { useTranslations } from "next-intl";
import { CloseIcon } from "@/assets/img/icons/close";
import Image from "next/image";
import Link from "next/link";
import "./style/dialog.scss";
import { UpRightIcon } from "@/assets/img/icons/up-right";

type Project = (typeof projects)[number];

interface ProjectsDialogProps {
  project: Project;
  onClose: () => void;
}

export const ProjectsDialog = ({ project, onClose }: ProjectsDialogProps) => {
  const t = useTranslations("projects");

  return (
    <article className="projects_dialog_container">
      <section className="projects_dialog_head">
        <h2 className="projects_dialog_title">
          {t(`items.${project.key}.title`)}
        </h2>
        <CloseIcon onClick={onClose} className="close" />
      </section>
      <section className="projects_dialog">
        <Image src={project.img} alt={t(`items.${project.key}.title`)} />
        <Link
          href={project.src}
          target="_blank"
          rel="noopener noreferrer"
          className="project_link"
        >
          <Button variant="default" className="link_btn">
            <UpRightIcon />
            {t("view_project")}
          </Button>
        </Link>
      </section>
      <section className="projects_dialog_content">
        <p className="projects_dialog_description">
          {t(`items.${project.key}.description`)}
        </p>
        <div className="project_tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project_tag">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
};
