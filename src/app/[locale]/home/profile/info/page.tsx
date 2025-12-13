import { useTranslations } from "next-intl";
import Social from "./social/page";
import "./style/info.scss";

const Info = () => {
  const t = useTranslations("profile");

  return (
    <article className="info_container">
      <section className="name_cont">
        <p className="name">{t("title")}</p>
        <h1 className="info">{t("info")}</h1>
      </section>
      <section className="nickname_cont">
        <p className="name">{t("nickname.title")}</p>
        <h2 className="info">{t("nickname.info")}</h2>
      </section>
      <section className="occupation_cont">
        <p className="name">{t("occupation.title")}</p>
        <h2 className="info">{t("occupation.info")}</h2>
      </section>
      <section className="availability_cont">
        <p className="name">{t("availability.title")}</p>
        <h2 className="info">{t("availability.info")}</h2>
      </section>
      <Social />
    </article>
  );
};

export default Info;
