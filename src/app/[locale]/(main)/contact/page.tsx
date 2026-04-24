import { Form, Card } from "@/components";
import Link from "next/link";
import { links } from "./data";
import "./style/style.scss";

const ContactPage = () => {
  return (
    <article className="contact_container">
      <Form />
      <section className="links_container">
        {links.map((item) => (
          <Card key={item.id} className="links">
            <h2>{item.header}</h2>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
              {item.label}
            </Link>
          </Card>
        ))}
      </section>
    </article>
  );
};

export default ContactPage;
