"use client";

import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import { Container } from "@/components/container";
import { SectionProps } from "@/components/type";
import "./style/contact.scss";

const Contact = ({ isOpen, onToggle }: SectionProps) => {
  return (
    <div className="contact">
      <Button
        className={`contact_btn ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
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

export default Contact;
