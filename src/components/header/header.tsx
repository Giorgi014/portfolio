"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";
import "./style/header.scss";

export const Header = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(`/${locale}`, "") || "/";

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ka" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header>
      <h2>Giorgi014</h2>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={
                  item.href === "/"
                    ? pathname === "/"
                      ? "active"
                      : ""
                    : pathname.startsWith(item.href)
                      ? "active"
                      : ""
                }
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
        <span className="line"></span>
        <button onClick={toggleLocale}>{locale === "en" ? "GE" : "EN"}</button>
        <button>{t("sound")}</button>
      </nav>
    </header>
  );
};
