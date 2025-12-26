"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { allProjects } from "./projects";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import "./style/components.scss";

const Cart = () => {
  const t = useTranslations("projects.allProjects");

  return (
    <div className="cart">
      {allProjects.map(
        ({ id, src, localUrl, title, stack, translationKey }) => (
          <Link key={id} href={localUrl} className="cart_content">
            <Container className="project_container" variant="projects">
              <Image
                src={src}
                alt={title}
                width={250}
                height={250}
                className="img"
              />
            </Container>
            <h2 className="cart_title">{title}</h2>
            <p className="stack">{stack}</p>
            {translationKey && (
              <p className="about">{t(`${translationKey}.cartAbout`)}</p>
            )}
          </Link>
        )
      )}
    </div>
  );
};

export default Cart;
