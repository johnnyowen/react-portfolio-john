import React from "react";
import "./style.css";
// ^ importing react and styles

const Footer = () => {
  const icons = [
    // Github link
    {
      name: "fab fa-github",
      link: "https://github.com/johnnyowen",
    },
    // LinkedIn link
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/john-owen-8a3950260/",
    },
    // StackOverflow link
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/21995091/johnnyboy",
    },
  ];
  return (
    <footer className="d-flex justify-content-center align-items-center">
      {/* map to apply all the links from icons array the links at the bottom */}
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
