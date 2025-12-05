import { HexBg } from "@/components/hex-bg";
import "./style/projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects_title">Projects</h1>
      <HexBg
        className="projects__bg"
        width="151"
        height="23"
        bgColor="#1C202B"
        borderColor="#000000"
      />
    </div>
  );
};

export default Projects;
