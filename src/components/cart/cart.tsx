"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container, allProjects, GearLoader } from "@/components";
import { useSlider } from "@/app/hooks";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ProjectTypes } from "./../type";
import "./style/cart.scss";

type CartProps = {
  filterProjects?: ProjectTypes[];
};

const Cart = ({ filterProjects = allProjects }: CartProps) => {
  const t = useTranslations("projects.allProjects");
  const { safeIndex, nextSlide, prevSlide, getCardStyle, sliderHandlers } =
    useSlider({
      itemsLength: filterProjects.length,
    });

  if (filterProjects.length === 0) {
    return (
      <div className="cart not_found">
        <GearLoader text="Projects Not Found" />
      </div>
    );
  }

  return (
    <div className="cart" {...sliderHandlers}>
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
        {safeIndex + 1}/{filterProjects.length}
      </div>
      <button onClick={nextSlide} className="nav_btn right">
        <BsChevronRight size={24} />
      </button>
    </div>
  );
};

export default Cart;
