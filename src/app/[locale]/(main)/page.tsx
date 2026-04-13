"use client";

import { Button } from "@/components";
import { DownRown } from "@/assets/img/dow-row";
import { useTranslations } from "next-intl";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import "./style/style.scss";

const HomePage = () => {
  const t = useTranslations("main");

  return (
    <main>
      <p className="system_init">{">"} SYSTEM_INIT... CONNECTION_ESTABLISHED</p>
      <h1>{t("name")}</h1>
      <p className="profession">{t("profession")}</p>
      <section className="button_section">
        <Link href="/projects">
          <Button variant="default">{t("view_projects")}</Button>
        </Link>
        <Link href="/contact">
          <Button variant="default">{t("contact")}</Button>
        </Link>
      </section>
      <DownRown className="down_row" />
      <section className="about_section">
        <p className="hero_about">{`// ${t("hero_about")}`}</p>
        <p className="about_me">{t("about")}</p>
        <Link href="/about">
          <Button variant="read_more">
            {t("read_more")} <LuMoveRight />
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
