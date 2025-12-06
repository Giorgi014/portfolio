import { HexBg } from "@/components/hex-bg";
import { Button } from "@/components/header-button";
import "./style/projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <Button className="projects_btn">
        <h1 className="projects_title">Projects</h1>
        <HexBg
          className="projects__bg"
          bgColor="#1C202B"
          borderColor="#000000"
        />
      </Button>
    </div>
  );
};

export default Projects;
