"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { navigation } from "./navigation";

export const Header = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(`/${locale}`, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - previousScrollY;

      if (currentScrollY <= 20) {
        setHeaderHidden(false);
      } else if (scrollDifference > 8) {
        setHeaderHidden(true);
      } else if (scrollDifference < -8) {
        setHeaderHidden(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ka" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-5 z-999 mx-auto flex w-[90%] max-w-360 items-center justify-between gap-5 rounded-3xl bg-(image:--header-background) p-5 text-(--header-text) transition-[top,translate] duration-300 ${
        headerHidden && !menuOpen
          ? "max-[768px]:top-[-100vh] min-[769px]:-translate-y-[calc(100%+1.25rem)]"
          : ""
      }`}
    >
      <Link href="/">
        <h2 className="font-league-spartan-bold text-2xl">Giorgi014</h2>
      </Link>
      <nav
        aria-label="Primary navigation"
        className={`${menuOpen ? "flex" : "hidden"} fixed inset-0 z-20 h-dvh w-screen flex-col items-center justify-center gap-8 overflow-y-auto max-[768px]:bg-(image:--header-background) p-5 font-league-spartan-medium text-[20px] min-[769px]:static min-[769px]:inset-auto min-[769px]:mt-0 min-[769px]:flex min-[769px]:h-auto min-[769px]:w-full min-[769px]:flex-row min-[769px]:justify-between min-[769px]:gap-5 min-[769px]:overflow-visible min-[769px]:bg-transparent min-[769px]:p-0`}
      >
        <ul className="flex w-full flex-col items-center justify-center gap-5 min-[769px]:flex-row">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-block py-1 text-(--header-text) transition-colors duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] after:pointer-events-none after:absolute after:-bottom-0.5 after:h-0.5 after:bg-(--white) after:transition-[width,left] after:duration-500 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                    isActive
                      ? "text-(--white) after:left-0 after:w-full"
                      : "after:left-1/2 after:w-0 hover:text-(--white) hover:after:left-0 hover:after:w-full focus-visible:text-(--white) focus-visible:after:left-0 focus-visible:after:w-full"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={toggleLocale} className="cursor-pointer">
          {locale === "en" ? "GE" : "EN"}
        </button>
      </nav>
      <button
        type="button"
        className="relative z-30 min-[769px]:hidden cursor-pointer"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
};
