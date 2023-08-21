import React from "react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";
import "./style.css";

const Page = ({ currentPage }) => {
  const renderPage = (page) => {
    switch (page) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section className="container py-3">
      <h2 className="mb-3">{currentPage}</h2>
      {renderPage(currentPage)}
    </section>
  );
};

export default Page;
