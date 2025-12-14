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
        <Link href={"https://github.com/Giorgi014"} target="_blank">
          <FaGithub className="icon git_hub" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/giorgi-gugunava-48a19b258/"}
          target="_blank"
        >
          <FaLinkedin className="icon linked_in" />
        </Link>
      </section>
    </article>
  );
};

export default Social;
