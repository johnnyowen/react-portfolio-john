import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// ^ importing react and emailjs dependency

const Contact = () => {
  // taking advantage of react useState and useRef hooks
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btnText, setBtnText] = useState("Submit");
  const form = useRef();
  // listening for changes on the page
  const handleChange = (e) => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  // logic for the emailjs form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    emailjs
      .sendForm(
        "service_jodo737",
        "template_a2pfvvl",
        form.current,
        "YtZS6VBZXYS4mZd16"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBtnText("Message Sent!");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setBtnText("Error!");
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="name"
          name="name"
          className="form-control"
          placeholder="Jane Doe"
          defaultValue={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="jane@doe.com"
          defaultValue={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          className="form-control"
          rows="3"
          defaultValue={formState.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-warning">
        {btnText}
      </button>
    </form>
  );
};

export default Contact;
