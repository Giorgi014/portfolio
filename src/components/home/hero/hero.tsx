import { Button } from "@/components/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ProfileImage } from "./profile-image";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import Image from "next/image";
import Splash from "@/assets/img/tag.png";

export const Hero = () => {
  const t = useTranslations("main");
  const nameText = t("name");
  const professionText = t("profession");

  return (
    <article className="relative isolate z-10 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-black bg-(image:--hero-background) px-5 py-12 text-center text-white rounded-b-[50px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [clip-path:inset(0_round_0_0_50px_50px)]"
      >
        <Image
          src={Splash}
          alt=""
          className="fixed inset-0 h-svh w-[clamp(90%,calc(100%-(100vw-640px)/5),100%)] select-none object-cover object-center opacity-40 blur-[2px] mix-blend-screen"
        />
      </div>
      <div className="relative my-15 z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-full text-[clamp(3rem,7vw,7rem)] leading-[0.85] font-league-spartan-black tracking-tight text-white drop-shadow-[0_0_24px_#ffffff40]">
            {nameText}
          </h1>
          <p className="mt-2.5 lg:mt-5 text-[clamp(1.1rem,3vw,2.25rem)] font-league-spartan-light tracking-[0.3em] uppercase">
            {professionText}
          </p>
          <p className="mt-4 lg:mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {t("about")}
          </p>
          <section className="mt-4 lg:mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <Link href="/projects">
              <Button variant="default" className="min-w-40">
                {t("view_projects")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="default" className="min-w-40">
                {t("contact")}
              </Button>
            </Link>
          </section>
        </div>
        <ProfileImage />
      </div>
      <InfiniteCarousel />
    </article>
  );
};
