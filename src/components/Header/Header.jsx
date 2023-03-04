import React from "react";
import { NavLink } from "react-router-dom";
import AosEffect from "../../shared/AosEffect/AosEffect";
import logo from "./img/logo.webp";
import "./Header.scss";
import NavbarList from "../NavbarList/NavbarList";

const Header = () => {
  AosEffect();

  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            <img src={logo} alt="" />
          </NavLink>
          <NavbarList />
        </div>
      </div>
    </header>
  );
};

export default Header;
