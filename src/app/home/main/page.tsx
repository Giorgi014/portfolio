import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./pojects/page";

const Main = () => {
  return (
    <div className="main_container">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
