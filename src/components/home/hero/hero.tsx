"use client";

import { Button } from "@/components/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("main");
  const nameText = t("name");
  const professionText = t("profession");

  return (
    <article className="relative isolate flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-transparent bg-(image:--hero-background) px-5 pb-12 pt-32 text-center text-white rounded-b-[50px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_48%,#67676770_0%,transparent_60%)]"
      />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <h1 className="max-w-full text-white text-[clamp(3.25rem,11vw,11rem)] leading-[0.85] font-league-spartan-black tracking-tight drop-shadow-[0_0_24px_#ffffff40]">
          {nameText}
        </h1>
        <p className="mt-5 text-[clamp(1.1rem,3vw,2.25rem)] font-league-spartan-light tracking-[0.3em] uppercase">
          {professionText}
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {t("about")}
        </p>
        <section className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link href="/projects">
            <Button
              variant="default"
              className="min-w-40 rounded-xl border border-white/40 bg-[linear-gradient(110deg,#666,#aaa)] px-8 py-4 font-league-spartan-bold text-white shadow-[8px_8px_0_#fff] backdrop-blur-md transition-[transform,box-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#fff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t("view_projects")}
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="default"
              className="min-w-40 rounded-xl border border-white/40 bg-[linear-gradient(110deg,#666,#aaa)] px-8 py-4 font-league-spartan-bold text-white shadow-[8px_8px_0_#fff] backdrop-blur-md transition-[transform,box-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#fff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t("contact")}
            </Button>
          </Link>
        </section>
      </div>
    </article>
  );
};
