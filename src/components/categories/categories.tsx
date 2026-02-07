"use client";

import { Button, categoriesNavigation } from "@/components";
import { useTranslations } from "next-intl";

type AllCategoriesProps = {
  categoryChange: (category: string) => void;
  selectedCategory: string;
};

export const AllCategories = ({
  categoryChange,
  selectedCategory,
}: AllCategoriesProps) => {
  const t = useTranslations("projects.projectNavigation");

  return (
    <article className="all">
      {categoriesNavigation.map((category) => (
        <Button
          key={category.id}
          className={category.className}
          onClick={() => categoryChange(category.category)}
        >
          <p className="category">{t(category.translationKey)}</p>
        </Button>
      ))}
      <div className="slider_divider" />
    </article>
  );
};
