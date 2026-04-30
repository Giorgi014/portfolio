"use client";

import { useTranslations } from "next-intl";
import { categories } from "./categories";
import "./style/style.scss";
import { CategoriesProps } from "@/components/type";
import { Button } from "@/components/button";

export const Categories = ({
  activeCategory,
  onCategoryChange,
}: CategoriesProps) => {
  const t = useTranslations("projects.categories");

  return (
    <article className="categories_container">
      {categories.map((item) => (
        <Button
          key={item.id}
          variant="default"
          type="button"
          className={`category_btn ${activeCategory === item.category ? "active" : ""}`}
          onClick={() => onCategoryChange(item.category)}
        >
          {t(item.category)}
        </Button>
      ))}
    </article>
  );
};
