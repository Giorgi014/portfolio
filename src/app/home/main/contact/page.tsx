"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import "./style/contact.scss";
import { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact">
      <Button className="contact_btn" onClick={handleButton}>
        <p className="contact_title">Contact</p>
        <HexBg
          className="contact__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
      {isOpen ? (
        <Container className="contact_container">
          <p>Contact</p>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
