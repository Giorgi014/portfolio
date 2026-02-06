"use client";

import { HexBg, Button } from "@/components";

type AllCategoriesProps = {
  categoryChange: (category: string) => void;
  selectedCategory: string;
};

export const AllCategories = ({
  categoryChange,
  selectedCategory,
}: AllCategoriesProps) => {
  return (
    <article className="all">
      <Button
        className="all_projects all_categories"
        onClick={() => categoryChange("all")}
      >
        <p className="category">All Projects</p>
      </Button>
      <Button
        className="all_landing all_categories"
        onClick={() => categoryChange("landing")}
      >
        <p className="category">Landing Pages</p>
      </Button>
      <Button
        className="all_ecommerce all_categories"
        onClick={() => categoryChange("ecommerce")}
      >
        <p className="category">Ecommerce Websites</p>
      </Button>
      <Button
        className="all_informational all_categories"
        onClick={() => categoryChange("informational")}
      >
        <p className="category">Informational</p>
      </Button>
      <Button
        className="all_games all_categories"
        onClick={() => categoryChange("game")}
      >
        <p className="category">Games</p>
      </Button>
      <Button
        className="all_animations all_categories"
        onClick={() => categoryChange("animations")}
      >
        <p className="category">Animations</p>
      </Button>
    </article>
  );
};
