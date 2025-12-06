import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import "./style/about.scss";

const About = () => {
  return (
    <div className="about">
      <Button className="about_btn">
        <h1 className="about_title">about</h1>
        <HexBg className="about__bg" bgColor="#1C202B" borderColor="#000000" />
      </Button>
    </div>
  );
};

export default About;
