import { HexBg } from "@/components/hex-bg";
import "./style/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_title">Contact</h1>
      <HexBg
        className="contact__bg"
        width="151"
        height="23"
        bgColor="#1C202B"
        borderColor="#000000"
      />
    </div>
  );
};

export default Contact;
