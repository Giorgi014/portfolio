"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import "./style/style.scss";

const Social = () => {
  const t = useTranslations("social");

  return (
    <article className="socials">
      <p className="socials_title">{t("socials")}</p>
      <section className="socials_links">
        <Link
          href={"https://github.com/Giorgi014"}
          target="_blank"
          aria-label="GitHub Profile"
        >
          <FaGithub className="icon git_hub" aria-hidden="true" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/giorgi-gugunava-48a19b258/"}
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="icon linked_in" aria-hidden="true" />
        </Link>
      </section>
    </article>
  );
};

export default Social;
