"use client";

import { useState } from "react";
import { HexBg } from "./hexBg";
import { Button } from "./button";

type AllCategoriesProps = {
  categoryChange: (category: string) => void;
  selectedCategory: string;
};

export const AllCategories = ({
  categoryChange,
  selectedCategory,
}: AllCategoriesProps) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleCategories = () => {
    setShow(!show);
  };
  return (
    <article className="all">
      <Button
        className="all_projects all_categories"
        onClick={() => categoryChange("all")}
      >
        <p className="category">All Projects</p>
        <HexBg
          className="category__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {show && (
        <>
          <Button
            className="all_landing all_categories"
            onClick={() => categoryChange("landing")}
          >
            <p className="category">Landing Pages</p>
            <HexBg
              className="category__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </Button>
          <Button
            className="all_ecommerce all_categories"
            onClick={() => categoryChange("ecommerce")}
          >
            <p className="category">Ecommerce Websites</p>
            <HexBg
              className="category__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </Button>
          <Button
            className="all_informational all_categories"
            onClick={() => categoryChange("informational")}
          >
            <p className="category">Informational</p>
            <HexBg
              className="category__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </Button>
          <Button
            className="all_games all_categories"
            onClick={() => categoryChange("game")}
          >
            <p className="category">Games</p>
            <HexBg
              className="category__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </Button>
          <Button
            className="all_animations all_categories"
            onClick={() => categoryChange("animations")}
          >
            <p className="category">Animations</p>
            <HexBg
              className="category__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </Button>
        </>
      )}
      <section className="show_hide_btn" onClick={toggleCategories}>
        {show ? (
          <button className="project_btn">Hide All Projects</button>
        ) : (
          <button className="project_btn">Show All Projects</button>
        )}
      </section>
    </article>
  );
};
