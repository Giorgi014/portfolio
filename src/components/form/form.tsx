"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button, Card } from "@/components";
import "./style/style.scss";

type FormResult = {
  message: string;
  success: boolean;
} | null;

type FormProps = {
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Form = ({ ref }: FormProps) => {
  const [result, setResult] = useState<FormResult>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const elements = [
      nameRef.current,
      emailRef.current,
      messageRef.current,
      btnRef.current,
    ];

    gsap.set(elements, { opacity: 0, y: 30 });
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.3,
    });
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult({ message: "Sending...", success: true });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult({ message: "Form Submitted Successfully", success: true });
      form.reset();
    } else {
      setResult({ message: "Error", success: false });
    }
  };

  return (
    <Card variant="form" className="form_container" ref={ref}>
      <form className="form" onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="Portfolio" />

        <div className="enter_name_cont" ref={nameRef}>
          <input
            type="text"
            name="enter_name"
            id="enter_name"
            className="enter_name"
            placeholder=" "
            required
          />
          <label htmlFor="enter_name" data-text="Enter Your Name">
            Enter Your Name
          </label>
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
          <label htmlFor="enter_email" data-text="Enter Your Email">
            Enter Your Email
          </label>
        </div>

        <div className="enter_text_cont" ref={messageRef}>
          <label htmlFor="enter_text">Enter Your Text</label>
          <textarea
            name="enter_text"
            id="enter_text"
            className="enter_text"
            required
          />
        </div>

        <Button
          variant="send"
          type="submit"
          ref={btnRef}
          data-text="Send Message"
        >
          Send Message
        </Button>

        {result && (
          <span
            className={
              result.success ? "form_result" : "form_result form_result--error"
            }
          >
            {result.message}
          </span>
        )}
      </form>
    </Card>
  );
};
