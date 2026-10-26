"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button, Card } from "@/components";

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
    <Card variant="form" ref={ref}>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="Portfolio" />

        <div ref={nameRef}>
          <label htmlFor="enter_name">
            Enter Your Name
          </label>
          <input
            type="text"
            name="enter_name"
            id="enter_name"
            placeholder="Your name"
            required
          />
        </div>

        <div ref={emailRef}>
          <label htmlFor="enter_email">
            Enter Your Email
          </label>
          <input
            type="email"
            name="enter_email"
            id="enter_email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div ref={messageRef}>
          <label htmlFor="enter_text">
            Enter Your Text
          </label>
          <textarea
            name="enter_text"
            id="enter_text"
            placeholder="How can I help?"
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
            role="status"
          >
            {result.message}
          </span>
        )}
      </form>
    </Card>
  );
};
