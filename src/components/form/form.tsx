import "./style/form.scss";

export const Form = () => {
  return (
    <section className="form_container">
      <form action="contact form" className="form">
        <div className="enter_name_cont">
          <input
            type="text"
            name="enter_name"
            id="enter_name"
            className="enter_name"
            required
          />
          <label htmlFor="Enter Your Name">Enter Your Name</label>
        </div>
        <div className="enter_email_cont">
          <input
            type="email"
            name="enter_email"
            id="enter_email"
            className="enter_email"
            placeholder=" "
            required
          />
          <label htmlFor="Enter Your Email">Enter Your Email</label>
        </div>
        <div className="enter_text_cont">
          <label htmlFor="Enter Your Text">Enter Your Text</label>
          <textarea
            name="enter_text"
            id="enter_text"
            className="enter_text"
            required
          ></textarea>
        </div>
        <button className="submit_text">Send Message</button>
      </form>
    </section>
  );
};
