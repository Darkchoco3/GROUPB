import React, { useState } from "react";
import "../Styles/Header.css";
import hambuger from "../assets/images/icon-hamburger.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-header">
      <h1>sunnyside</h1>
      <ul className="right-side">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <button>CONTACT</button>
      </ul>
      <img
        src={hambuger}
        className="menu"
        onClick={toggleMenu}
        alt="menu icon"
      />
      {isOpen && <ModalMenu toggleMenu={toggleMenu} />}
    </div>
  );
};

const ModalMenu = ({ toggleMenu }) => {
  return (
    <div className="modal-menu">
      <ul>
        <li onClick={toggleMenu}>About</li>
        <li onClick={toggleMenu}>Services</li>
        <li onClick={toggleMenu}>Projects</li>
        <button className="m-btn" onClick={toggleMenu}>CONTACT</button>
      </ul>
    </div>
  );
};

export default Header;
