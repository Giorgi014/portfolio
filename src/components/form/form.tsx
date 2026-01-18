"use client";

import React, { useState } from "react";
import "./style/form.scss";

export const Form = () => {
  const [result, setResult] = useState("");

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
        <div className="enter_name_cont">
          <input
            type="text"
            name="enter_name"
            id="enter_name"
            className="enter_name"
            required
          />
          <label htmlFor="Enter Your Name">Enter Your Name</label>
        </div>
        <div className="enter_email_cont">
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
        <div className="enter_text_cont">
          <label htmlFor="Enter Your Text">Enter Your Text</label>
          <textarea
            name="enter_text"
            id="enter_text"
            className="enter_text"
            required
          ></textarea>
        </div>
        <button className="submit_text">Send Message</button>
        <span>{result}</span>
      </form>
    </section>
  );
};
