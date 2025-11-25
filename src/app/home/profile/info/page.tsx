import Social from "./social/page";
import "./style/info.scss";

const Info = () => {
  return (
    <article className="info_container">
      <section className="name_cont">
        <p className="name">Name</p>
        <h1 className="info">Giorgi Gugunava</h1>
      </section>
      <section className="nickname_cont">
        <p className="name">Nickname</p>
        <h2 className="info">Giorgi014</h2>
      </section>
      <section className="occupation_cont">
        <p className="name">Occupation</p>
        <h2 className="info">Front-End Developer</h2>
      </section>
      <section className="availability_cont">
        <p className="name">Availability</p>
        <h2 className="info">open for hire</h2>
      </section>
      <Social />
    </article>
  );
};

export default Info;
