import { Button, projects } from "@/components";
import { useTranslations } from "next-intl";
import { CloseIcon } from "@/assets/img/icons/close";
import Image from "next/image";
import Link from "next/link";
import { UpRightIcon } from "@/assets/img/icons/up-right";

type Project = (typeof projects)[number];

interface ProjectsDialogProps {
  project: Project;
  onClose: () => void;
}

export const ProjectsDialog = ({ project, onClose }: ProjectsDialogProps) => {
  const t = useTranslations("projects");

  return (
    <article
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
      >
        <section>
          <h2>
            {t(`items.${project.key}.title`)}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <CloseIcon />
          </button>
        </section>
        <section>
          <Image
            src={project.img}
            alt={t(`items.${project.key}.title`)}
          />
          <Link
            href={project.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">
              <UpRightIcon />
              {t("view_project")}
            </Button>
          </Link>
        </section>
        <section>
          <p>
            {t(`items.${project.key}.description`)}
          </p>
          <div>
            {project.technologies.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
