import "./style/about.scss";

const About = () => {
  return (
    <div className="about">
      <span className="about__title">ACHIEVEMENTS</span>

      <svg
        className="about__bg"
        viewBox="0 0 528 80"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="about-hex-mask" maskUnits="userSpaceOnUse">
            <rect width="528" height="80" fill="white" />

            {/* HEX #1 */}
            <polygon
              className="about__hex-mask-border"
              points="
      517.435,0
      528,5.5225
      528,16.5675
      518.435,22.09
      506.87,16.5675
      506.87,5.5225
    "
              fill="white"
              stroke="black"
              transform="rotate(30 517.435 11.045)"
            />

            {/* HEX #2 */}
            <polygon
              className="about__hex-mask-border"
              points="
      492.305,0
      502.87,5.5225
      502.87,16.5675
      493.305,22.09
      481.74,16.5675
      481.74,5.5225
    "
              fill="white"
              stroke="black"
              transform="rotate(30 492.305 11.045)"
            />

            {/* HEX #3 */}
            <polygon
              className="about__hex-mask-border"
              points="
      467.175,0
      477.74,5.5225
      477.74,16.5675
      468.175,22.09
      456.61,16.5675
      456.61,5.5225
    "
              fill="white"
              stroke="black"
              transform="rotate(30 467.175 11.045)"
            />
          </mask>
        </defs>
        <rect
          width="528"
          height="80"
          fill="#1C202B"
          mask="url(#about-hex-mask)"
        />
      </svg>
    </div>
  );
};

export default About;
