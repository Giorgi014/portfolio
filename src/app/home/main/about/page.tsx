"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import "./style/about.scss";

const About = ({ isOpen, onToggle }: SectionProps) => {
  return (
    <div className="about">
      <Button
        className={`about_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <p className="about_title">about</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>
      {isOpen ? (
        <Container className="about_container">
          <div>
            <p>About Me</p>
            <p>Front End Developer</p>
            <p>
              Hi, I’m Giorgi, a Front-End Developer skilled in React,
              TypeScript, and modern web technologies. I build responsive,
              user-focused interfaces and enjoy turning ideas into clear and
              interactive experiences. I focus on writing clean, maintainable
              code and creating interfaces that feel intuitive and polished. I
              enjoy working on real-world projects, improving UI quality, and
              continuously growing as a front-end developer.
            </p>
          </div>
          <div className="border_cont">
            <div className="border one"></div>
            <div className="border two"></div>
            <div className="border three"></div>
            <div className="border four"></div>
          </div>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
