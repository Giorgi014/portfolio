"use client";

import { useSlider } from "@/app/hooks";
import { categoriesNavigation } from "@/components";
import { useTranslations } from "next-intl";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { categoriesNavigationType } from "../type";

type AllCategoriesProps = {
  categoryChange: (category: string) => void;
  selectedCategory: string;
  filterNavigation?: categoriesNavigationType[];
};

export const AllCategories = ({
  categoryChange,
  selectedCategory,
  filterNavigation = categoriesNavigation,
}: AllCategoriesProps) => {
  const t = useTranslations("projects.projectNavigation");
  const { safeIndex, nextSlide, prevSlide, getCardStyle } = useSlider({
    itemsLength: filterNavigation.length,
    translateX: 160,
    scale: 0.95,
    rotateY: 0,
  });

  return (
    <article className="all">
      <button onClick={prevSlide} className="nav_btn left">
        <BsChevronLeft size={24} />
      </button>
      <nav className="categories_navigation">
        {filterNavigation.map((category, index) => (
          <button
            key={category.id}
            className={category.className}
            onClick={() => categoryChange(category.category)}
            style={getCardStyle(index)}
          >
            <p className="category">{t(category.translationKey)}</p>
          </button>
        ))}
        <div className="slider_divider" />
      </nav>
      <button onClick={nextSlide} className="nav_btn right">
        <BsChevronRight size={24} />
      </button>
    </article>
  );
};
