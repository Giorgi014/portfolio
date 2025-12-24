"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { allProjects } from "./projects";

const Cart = () => {
  const t = useTranslations("projects.allProjects");

  return (
    <div className="cart">
      {allProjects.map(({ id, src, title, stack, translationKey }) => (
        <div key={id} className="cart_content">
          <Image src={src} alt={title} width={20} height={20} className="img" />
          <h2 className="cart_title">{title}</h2>
          <p className="stack">{stack}</p>
          {translationKey && (
            <p className="about">{t(`${translationKey}.about`)}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
