"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { allProjects } from "./projects";
import { Link } from "@/i18n/navigation";
import "./style/components.scss";

const Cart = () => {
  const t = useTranslations("projects.allProjects");

  return (
    <div className="cart">
      {allProjects.map(
        ({ id, src, localUrl, title, stack, translationKey }) => (
          <Link key={id} href={localUrl} className="cart_content">
            <Image
              src={src}
              alt={title}
              width={20}
              height={20}
              className="img"
            />
            <h2 className="cart_title">{title}</h2>
            <p className="stack">{stack}</p>
            {translationKey && (
              <p className="about">{t(`${translationKey}.about`)}</p>
            )}
          </Link>
        )
      )}
    </div>
  );
};

export default Cart;
