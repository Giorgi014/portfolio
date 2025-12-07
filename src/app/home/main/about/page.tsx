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
          <p>About Me</p>
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
