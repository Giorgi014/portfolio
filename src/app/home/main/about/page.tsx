"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import "./style/about.scss";
import { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about">
      <Button className="about_btn" onClick={handleButton}>
        <p className="about_title">about</p>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>
      {isOpen ? (
        <Container className="about_container">
          <p>About Me</p>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
