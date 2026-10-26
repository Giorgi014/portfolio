"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";
import { BurgerMenu } from "./burger-menu";

type MenuState = "closed" | "open" | "closing";

export const Header = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(`/${locale}`, "") || "/";
  const [menuState, setMenuState] = useState<MenuState>("closed");

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ka" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const openMenu = () => setMenuState("open");

  const closeMenu = () => {
    setMenuState("closing");
    setTimeout(() => setMenuState("closed"), 300);
  };

  const toggleMenu = () => {
    if (menuState === "open") closeMenu();
    else if (menuState === "closed") openMenu();
  };

  return (
    <header>
      <div>
        <Link href="/">
          <h2>Giorgi014</h2>
        </Link>
        <nav>
          <ul>
            {navigation.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <span />
          <button onClick={toggleLocale}>
            {locale === "en" ? "GE" : "EN"}
          </button>
        </nav>
        <BurgerMenu isOpen={menuState === "open"} onToggle={toggleMenu} />
      </div>
    </header>
  );
};
