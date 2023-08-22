import React from "react";
import Nav from "../Nav";
import headerImg from "../../assets/images/banner7.jpg";
import "./style.css";
// ^ importing react, Nav, the header background image and styles

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header className="container-fluid">
      <img src={headerImg} alt="Cyberpunk's Night City at night" />
      <div className="container d-lg-flex justify-content-lg-between py-3">
        <h1 className="text-center">Johnny Owen</h1>
        {/* Nav component with the "links" to the other components of the page */}
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
