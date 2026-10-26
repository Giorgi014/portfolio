"use client";

import { useTranslations } from "next-intl";
import { categories } from "./categories";
import { CategoriesProps } from "@/components/type";
import { Button } from "@/components/button";

export const Categories = ({
  onCategoryChange,
}: CategoriesProps) => {
  const t = useTranslations("projects.categories");

  return (
    <article>
      {categories.map((item) => {
        return (
          <Button
            key={item.id}
            variant="filter"
            type="button"
            onClick={() => onCategoryChange(item.category)}
          >
            {t(item.category)}
          </Button>
        );
      })}
    </article>
  );
};
