"use client";

import { useEffect, useRef } from "react";
import { Form, Card } from "@/components";
import Link from "next/link";
import { links } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style/style.scss";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 769;

const ContactPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
    );

    if (isMobile) {
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              scroller: ".main_cont",
            },
          },
        );
      });
    } else {
      gsap.set(cardsRef.current, { opacity: 0, y: 30 });
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.25,
        delay: 0.5,
      });
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <article className="contact_container">
      <Form ref={formRef} />
      <section className="links_container">
        {links.map((item, index) => (
          <Card
            key={item.id}
            className="links"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <h2>{item.header}</h2>
            <Link href={item.href} target="_blank" rel="noopener noreferrer" data-text={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </Card>
        ))}
      </section>
    </article>
  );
};

export default ContactPage;
