import { HexBg } from "@/components/hex-bg";
import "./style/about.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about_title">ACHIEVEMENTS</h1>
      <HexBg
        className="about__bg"
        width="151"
        height="23"
        bgColor="#1C202B"
        borderColor="#000000"
      />
    </div>
  );
};

export default About;
