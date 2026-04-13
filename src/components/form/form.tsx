"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components";
import "./style/style.scss";

export const Form = () => {
  const [result, setResult] = useState("");
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.set(
      [nameRef.current, emailRef.current, messageRef.current, btnRef.current],
      {
        opacity: 0,
        y: 40,
      },
    );

    const tl = gsap.timeline({
      delay: 0.3,
    });
    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    })
      .to(emailRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      })
      .to(messageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      })
      .to(btnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section className="form_container">
      <form action="contact form" className="form" onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="Portfolio"></input>
        <div className="enter_name_cont" ref={nameRef}>
          <input
            type="text"
            name="enter_name"
            id="enter_name"
            className="enter_name"
            required
          />
          <label htmlFor="Enter Your Name">Enter Your Name</label>
        </div>
        <div className="enter_email_cont" ref={emailRef}>
          <input
            type="email"
            name="enter_email"
            id="enter_email"
            className="enter_email"
            placeholder=" "
            required
          />
          <label htmlFor="Enter Your Email">Enter Your Email</label>
        </div>
        <div className="enter_text_cont" ref={messageRef}>
          <label htmlFor="Enter Your Text">Enter Your Text</label>
          <textarea
            name="enter_text"
            id="enter_text"
            className="enter_text"
            required
          ></textarea>
        </div>
        <Button variant="send" type="submit" ref={btnRef}>
          Send Message
        </Button>
        <span>{result}</span>
      </form>
    </section>
  );
};
