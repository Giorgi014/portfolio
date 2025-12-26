"use client";

import { useState } from "react";
import { HexBg } from "./hexBg";
// import { Button } from "./headerButton";

export const AllCategories = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleCategories = () => {
    setShow(!show);
  };
  return (
    <article className="all" onClick={toggleCategories}>
      <button className="all_projects all_categories">
        <p className="category">All Projects</p>
        <HexBg
          className="projects__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </button>
      {show && (
        <>
          <button className="all_landing all_categories">
            <p className="category">Landing Pages</p>
            <HexBg
              className="projects__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </button>
          <button className="all_ecommerce all_categories">
            <p className="category">Ecommerce Websites</p>
            <HexBg
              className="projects__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </button>
          <button className="all_games all_categories">
            <p className="category">Games</p>
            <HexBg
              className="projects__bg"
              bgColor="#1C202B"
              borderColor="#000000"
            />
          </button>
        </>
      )}
    </article>
  );
};
