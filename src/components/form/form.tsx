"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./style/form.scss";

type FormProps = {
  open: boolean;
  isClosing: boolean;
};

export const Form = ({ open, isClosing }: FormProps) => {
  const [result, setResult] = useState("");
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && !isClosing) {
      gsap.set(
        [nameRef.current, emailRef.current, messageRef.current, btnRef.current],
        {
          opacity: 0,
          y: 40,
        },
      );

      const tl = gsap.timeline({
        delay: 0.8,
      });
      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .to(emailRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(messageRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(btnRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
    }

    if (isClosing) {
      const tl = gsap.timeline();
      tl.to(btnRef.current, {
        opacity: 0,
        y: -20,
        duration: 0,
        ease: "power3.in",
      })
        .to(messageRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power3.in",
        })
        .to(emailRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power3.in",
        })
        .to(nameRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power3.in",
        });
    }
  }, [open, isClosing]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "1acf3ed7-c079-40eb-9663-cb712813dfdc");

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
        <button className="submit_text" ref={btnRef}>
          Send Message
        </button>
        <span>{result}</span>
      </form>
    </section>
  );
};
