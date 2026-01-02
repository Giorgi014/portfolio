"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { allProjects } from "./projects";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import { CSSProperties, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ProjectTypes } from "./type";
import GearLoader from "./loader";
import "./style/cart.scss";

type CartProps = {
  filterProjects?: ProjectTypes[];
};

const Cart = ({ filterProjects = allProjects }: CartProps) => {
  const t = useTranslations("projects.allProjects");
  const [currentCart, setCurrentCart] = useState<number>(0);

  const safeCurrentCart =
    currentCart >= filterProjects.length ? 0 : currentCart;

  const nextSlide = () => {
    setCurrentCart((prev) => (prev + 1) % filterProjects.length);
  };

  const prevSlide = () => {
    setCurrentCart(
      (prev) => (prev - 1 + filterProjects.length) % filterProjects.length
    );
  };

  const getCardStyle = (index: number): CSSProperties => {
    const diff =
      (index - safeCurrentCart + filterProjects.length) % filterProjects.length;

    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    }

    if (diff === 1) {
      return {
        transform: "translateX(400px) scale(0.9) rotateY(50deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    if (diff === filterProjects.length - 1) {
      return {
        transform: "translateX(-400px) scale(0.9) rotateY(-50deg)",
        zIndex: 20,
        opacity: 0.6,
        filter: "brightness(0.6)",
      };
    }

    return {
      transform: "translateX(0) scale(0.8)",
      opacity: 0,
      pointerEvents: "none",
      zIndex: 0,
    };
  };

  if (filterProjects.length === 0) {
    return (
      <div className="cart not_found">
        <GearLoader text="Projects Not Found" />
      </div>
    );
  }

  return (
    <div className="cart">
      <button onClick={prevSlide} className="nav_btn left">
        <BsChevronLeft size={24} />
      </button>
      {filterProjects.map((project, index) => (
        <Link
          key={project.id}
          href={project.localUrl}
          className="cart_content"
          style={getCardStyle(index)}
        >
          <Container className="project_container" variant="projects">
            <Image
              src={project.src}
              alt={project.title}
              width={250}
              height={250}
              className="img"
            />
          </Container>
          <h2 className="cart_title">{project.title}</h2>
          <p className="stack">{project.stack}</p>
          {project.translationKey && (
            <p className="about">{t(`${project.translationKey}.cartAbout`)}</p>
          )}
        </Link>
      ))}
      <div className="slider_divider" />
      <div className="slider_counter">
        {safeCurrentCart + 1}/{filterProjects.length}
      </div>
      <button onClick={nextSlide} className="nav_btn right">
        <BsChevronRight size={24} />
      </button>
    </div>
  );
};

export default Cart;
