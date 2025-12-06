import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import "./style/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Button className="contact_btn">
        <h1 className="contact_title">Contact</h1>
        <HexBg
          className="contact__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
    </div>
  );
};

export default Contact;
